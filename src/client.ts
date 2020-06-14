import { default as axios } from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const accessTest = async () => {
  try {
    const response = await axios.post("http://95.217.235.69/", {
      contactInfo: {
        fullName: "Jonathan Alexander Lima Ruiz",
        emailAddress: process.env.EMAIL,
      },
      github: {
        profileURL: "https://github.com/JonathanL1ma",
        username: "JonathanL1ma",
      },
      credentials: {
        password: process.env.PASSWORD,
      },
      personalInfo: {
        questions: [
          {
            question: "If I was a Sr. Programmer, I would like to build:",
            answer: "A company that is dedicated to creating multiplatform applications which help people to solve the different problems that arise in their day to day.",
          },
          {
            question: "Por favor indica el URL que me lleva a la línea de código de la definición de React.useEffect",
            answer: "https://github.com/facebook/react/blob/655affa302437208e6f03c9ca6d170ea1707ace3/packages/react-reconciler/src/ReactFiberHooks.new.js#L1878",
          },
          {
            question: "code is poetry, because:",
            answer: "Because there are thousands of ways to write code and everyone does it in their own way.",
          },
        ],
      },
    });

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
