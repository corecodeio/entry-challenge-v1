import { default as Axios } from "axios";
import * as dotEnv from "dotenv";

dotEnv.config();

import data from './data';


const sendSchema = async () => {
  try {
    console.log(data);
    const response = await Axios.post(process.env.HOST, data);
    console.log({
      status: response.status,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

const getCredential = async () => {
  try {
    const response = await Axios.get(
      `${process.env.HOST}/solareslucas.figueroa@gmail.com`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-password": process.env.PASSWORD,
        },
      },
    );
    console.log({
      status: response.status,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

sendSchema()
  .then(() => getCredential())
  .catch((error) => console.error(error));
