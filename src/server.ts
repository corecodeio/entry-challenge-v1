import express, { Express } from "express";

export const server: Express = express();
server.use(express.json());

export default server;