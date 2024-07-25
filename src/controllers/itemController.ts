import { Request, Response } from "express";

export const getItems = async (req: Request, res: Response) => {
  res.send({
    message: "Hello from items",
    status: 200,
    success: true,
    data: [],
  });
};
