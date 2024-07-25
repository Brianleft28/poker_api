import { NextFunction, Request, Response, Router } from "express";
import { getApiKey } from "../controllers/apiKeyContoller";

const router = Router();

// middleware para obtener apiKey
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
// uso de middlewareApiKey
router.use(middlewareApiKey);

// importar controlador
router.get("/", getApiKey);

export default router;
