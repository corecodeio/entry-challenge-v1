const Ajv = require("ajv");
const bcrypt = require("bcryptjs");
const express = require("express");
const fs = require("fs");
const schema = require("./schema.json");
const Axios = require("axios")
const server = require("./server");
const client = require('./client.ts')

const router = express.Router({
  strict: true,
});

server.set('port',3000)

const get = router.get("/:emailAddress", async (req, res) => {
  const message =
    "Acceso inválido mi chavo. ¿Proporcionaste la contraseña en el parámetro x-password de los headers?";

  try {
    console.log(req.headers['content-type'])
    const password = req.headers['x-password'];

    const getData = ()=>
      new Promise((resolve, reject) => {
        fs.readFile(`public/${req.params.emailAddress}.json`, "utf8", (err, data) => {
          if (err) {
            reject(new Error("Correo inválido."));
          }

          resolve(data);
        });
      });

    const data = JSON.parse(await getData());

    const isValidPassword = await bcrypt.compare(password, data.credentials.password);

    if (!isValidPassword) {
      res.status(400);
      return res.json({
        status: "400",
        message,
      });
    }

    delete req.body.credentials;

    /*const acceso = await Axios.get(`http://95.217.235.69/${req.params.emailAddress}`, 
    {headers: {'x-password': password, "Content-Type": "application/json"}});
    if(!acceso||acceso==null) {
      res.status(400);
      return res.json({ status: "400", message: "Error en la peticion." });
    }

    data.bienvenido = {
      claveDeAcceso: acceso.data.bienvenido,
    };*/

    delete data.credentials;

    return res.json(data);
  } catch (error) {
    res.status(400);
    return res.json({
      status: "400",
      message: Boolean(error.message) ? error.message : message,
    });
  }
});

const post = router.post("/", async (req, res) => {
  const ajv = new Ajv();
  try {
    if (!ajv.validate(schema, req.body)) {
      console.log(ajv.errors)
      res.status(400);
      return res.json({ status: "400", message: "La información está incompleta." });
    }

    const fileName = req.body.contactInfo.emailAddress;

    console.log(fileName);

    req.body.credentials.password = await bcrypt.hash(
      req.body.credentials.password,
      await bcrypt.genSalt(),
    );

    fs.mkdir('public/',()=>{fs.writeFile(
      `./public/${fileName}.json`,
      JSON.stringify(req.body, null, 2),
      "utf8",
      () => {},
    );});

    delete req.body.credentials;

    return res.json(req.body);
  } catch (error) {
    console.error(error);
    res.status(400);
    res.json({ status: "400", message: "Por favor revisa la información proporcionada." });
  }
});

server.use('/api', post, get)

server.listen("3000", () => {
  console.log("listening");
});

client.postPetition();
client.getPetition();
