import { NextFunction, Request, Response, Router } from "express";
import { readdirSync } from "fs";
import "dotenv/config";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const globalMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const api_key_value = process.env.API_KEY;
  const api_key_name = "API_KEY";
  if (req.headers[api_key_name.toLowerCase()] !== api_key_value) {
    return res.status(401).json({
      message: `Missing or incorrect ${api_key_name} header`,
      status: 401,
      success: false,
    });
  }
  next();
};

router.use((req: Request, res: Response, next: NextFunction) => {
  if (req.path === "/api/v1/apiKey") {
    return next();
  }
  globalMiddleware(req, res, next);
});

const cleanName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const name = cleanName(fileName);
  if (name !== "index") {
    import(`./${name}`).then((module) => {
      console.log(`Route http://localhost/api/v1/${name} loaded`);
      router.use(`/api/v1/${name}`, module.default);
    });
  }
});

export default router;
