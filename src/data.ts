import * as dotenv from "dotenv";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case "production":
    path = `${__dirname}/./../.env.production`;
    break;
  default:
    path = `${__dirname}/./../.env.development`;
}
dotenv.config({ path: path });

export const data = {
  contactInfo: {
    fullName: "Jimmy Ottoniel Gabriel Roquel",
    emailAddress: "jimmyottonielgr@gmail.com",
  },
  github: {
    profileURL: "https://github.com/Jimmygabriel",
    username: "Jimmygabriel",
  },
  credentials: {
    password: `${process.env.PASSWORD_ENV}`,
  },
  personalInfo: {
    questions: [
      {
        question: "If I was a Sr. Programmer, I would like to build:",
        answer: "Reverse engineering tool development :'D",
      },
      {
        question:
          "Por favor indica el URL que me lleva a la línea de código de la definición de React.useEffect",
        answer:
          "https://github.com/facebook/react/blob/655affa302437208e6f03c9ca6d170ea1707ace3/packages/react-reconciler/src/ReactFiberHooks.new.js#L1878",
      },
      {
        question: "code is poetry, because:",
        answer:
          "The overflow of the soul, a lucid dream, the spirit of the developer.  Of what is not yet, but already is, before it was.",
      },
    ],
  },
};
