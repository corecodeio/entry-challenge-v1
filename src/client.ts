import axios from "axios";
import { data } from "./data";

postData();
getData();

async function postData() {
  axios
    .post("http://95.217.235.69/", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

async function getData() {
  const URL = "http://95.217.235.69/";
  axios
    .get(URL + data.contactInfo.emailAddress, {
      headers: {
        "x-password": data.credentials.password,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
