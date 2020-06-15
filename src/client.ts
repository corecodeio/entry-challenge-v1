import { request } from "http";
import data from "./data.json";

const userPassword = process.env.SERVER_PASSWORD;

async function sendInformation() {
  const req = request(
    {
      host: "95.217.235.69",
      port: "80",
      path: "/",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
    (response) => {
      console.table(response.statusCode); // 200
    },
  );
  req.write(JSON.stringify(data));
  req.end();
}

async function validateInformation() {
  const req = request(
    {
      host: "95.217.235.69",
      port: "80",
      path: "/ktoxcon@protonmail.com",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-password": userPassword,
      },
    },
    (response) => {
      console.log(response.statusCode);
    },
  );
  req.end();
}

sendInformation();
validateInformation();
