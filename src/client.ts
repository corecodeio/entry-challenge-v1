import { request } from "http";

import myInformation from "./data";


async function sendMyInformation() {
  const req = request(
    {
      host: "95.217.235.69",
      port: "80",
      path: "/",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  myInformation.credentials.password = process.env.PASSWORD_SECRET;
  req.write(JSON.stringify(myInformation));
  req.end();
}

async function getMyInformation() {
  const req = request(
    {
      host: "95.217.235.69",
      port: "80",
      path: "/mconcoba20@gmail.com",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-password": process.env.PASSWORD_SECRET,
      },
    },
  );
  req.end();
}

sendMyInformation();
getMyInformation();
