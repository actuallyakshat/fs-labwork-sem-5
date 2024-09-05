import { Request, Response } from "express";
const express = require("express");
const router = express.Router();

router.get("/login", (req: Request, res: Response) => {
  res.send("This is the login route!");
});

router.get("/signup", (req: Request, res: Response) => {
  res.send("This is the signup route!");
});

export default router;
