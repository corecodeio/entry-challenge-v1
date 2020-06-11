import express from "express";
import server from "./server";

export const router = express.Router({
  strict: true,
});

server.get("/:email", (req: Request, res: Response) => {
  return res.json(req.params);
});

server.post("/", (req: Request, res: Response) => {
  return res.json({ a: "b" });
});

server.listen("80", () => {
  console.log("listening");
});
