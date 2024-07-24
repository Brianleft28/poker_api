import { Request, Response, Router } from "express";

const router = Router();

router.use("/", (req: Request, res: Response) => {
  res.send({
    message: "Hello from blog",
    status: 200,
    success: true,
    data: [],
  });
});

export default router;
