import axios from "axios";
import * as devconf from "dotenv";
import data from "./data.json";

devconf.config();

const postInfo = async () => {
  try {
    await axios.post(`${process.env.BASE_URL}`, {
      headers: {},
      data: { data },
    });
  } catch (error) {
    console.error(error);
  }
};

const getInfo = async () => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}:${process.env.MAIL}`, {
      headers: {
        "Content-Type": "application/json",
        "x-password": process.env.ACCESS_KEY,
      },
    });

    const data = res.data;
    console.log("Resultado del Get", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

getInfo(), postInfo();
