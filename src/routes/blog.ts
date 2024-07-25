import { Router } from "express";
import { getBlog } from "../controllers/blogController";

const router = Router();

router.use("/", getBlog);

export default router;
