import { NextFunction, Request, Response, Router } from "express";
import "dotenv/config";

const router = Router();

const middlewareApiKey = (req: Request, res: Response, next: NextFunction) => {
  const tokenName = "token";
  const tokenValue = process.env.TOKEN;

  if (req.headers[tokenName] !== tokenValue) {
    return res.status(401).json({
      message: `Missing or incorrect ${tokenName} header`,
      status: 401,
      success: false,
    });
  }
  next();
};

router.use(middlewareApiKey);

router.get("/", (req, res) => {
  res.send({ apiKey: process.env.API_KEY });
});

export default router;
