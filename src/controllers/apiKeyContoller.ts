import { Request, Response } from "express";
import "dotenv/config";

export const getApiKey = async (req: Request, res: Response) => {
  res.send({ apiKey: process.env.API_KEY });
};
