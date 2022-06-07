//src routes loginRoutes.ts

import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send(`Привет`);
});

export { router };
