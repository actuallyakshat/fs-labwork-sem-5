import authRoutes from "./routes/authRoutes";
import { Request, Response } from "express";
import express from "express";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use("/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("You have reached the home route.");
});

app.get("*", (req: Request, res: Response) => {
  res.status(404).send("Page not found!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
