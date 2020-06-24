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
    const res = await axios.get(`${process.env.BASE_URL}:rvelasquezumg@gmail.com`, {
      headers: {
        "Content-Type": "application/json",
        "x-password": process.env.ACCESS_KEY,
      },
    });
    console.log({
      status: res.status,
      data: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

getInfo(), 
postInfo();