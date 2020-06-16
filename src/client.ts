import { default as axios } from "axios";

import { data } from './data';

const accessTest = async () => {
  try {
    const response = await axios.post("http://95.217.235.69/", data);

    console.log(response.data);

    if (response.status === 200) {
        const getCredentials = await axios.get(`http://95.217.235.69/${process.env.EMAIL}`, {
            headers: {
                "Content-Type": "application/json",
                "x-password": process.env.PASSWORD
            }
        });

        console.log(getCredentials.data);
    } else {
        throw new Error('Response Failed');
    }

  } catch (error) {
    console.error(error);
  }
};

accessTest();
