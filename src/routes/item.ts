import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send({ items: ["item1", "item2"] });
});

export default router;
