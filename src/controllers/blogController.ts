import { Request, Response } from "express";

export const getBlog = async (req: Request, res: Response) => {
  res.send({
    message: "Hello from blog",
    status: 200,
    success: true,
    data: [],
  });
};
