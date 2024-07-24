import express from "express";
import "dotenv/config";
import cors from "cors";
import router from "./routes";
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
