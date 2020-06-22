import Ajv from "ajv";
import { compare, genSalt, hash } from "bcryptjs";
import express, { Request, Response } from "express";
import fs from "fs";
import schema from "./schema.json";
import server from "./server";

export const router = express.Router({
  strict: true,
});

server.get("/:emailAddress", async (req: Request, res: Response) => {
  const message =
    "Acceso inválido mi chavo. ¿Proporcionaste la contraseña en el parámetro x-password de los headers?";

  try {
    const password = req.headers["x-password"];

    const getData = (): Promise<string> =>
      new Promise((resolve, reject) => {
        fs.readFile(`./data/${req.params.emailAddress}.json`, "utf8", (err, data) => {
          if (Boolean(err)) {
            reject(new Error("Correo inválido."));
          }

          resolve(data);
        });
      });

    const data = JSON.parse(await getData());

    const isValidPassword = await compare(password, data.credentials.password);

    if (!isValidPassword) {
      res.status(400);
      return res.json({
        status: "400",
        message,
      });
    }

    delete req.body.credentials;

    data.bienvenido = {
      claveDeAcceso: process.env.CLAVE_DE_ACCESO,
    };

    return res.json(data);
  } catch (error) {
    res.status(400);
    return res.json({
      status: "400",
      message: Boolean(error.message) ? error.message : message,
    });
  }
});

server.post("/", async (req: Request, res: Response) => {
  const ajv = new Ajv();
  try {
    if (!ajv.validate(schema, req.body)) {
      res.status(400);
      return res.json({ status: "400", message: "La información está incompleta." });
    }

    const fileName = req.body?.contactInfo?.emailAddress;

    req.body.credentials.password = await hash(
      req.body.credentials.password,
      await genSalt(),
    );

    fs.writeFile(
      `./data/${fileName}.json`,
      JSON.stringify(req.body, null, 2),
      "utf8",
      () => {},
    );

    delete req.body.credentials;

    return res.json(req.body);
  } catch (error) {
    console.error(error);
    res.status(400);
    res.json({ status: "400", message: "Por favor revisa la información proporcionada." });
  }
});

server.listen("80", () => {
  console.log("listening");
});
