import { request } from 'http';
import { createWriteStream } from 'fs';
 
async function sendInformation(){
    const req = request(
        {
          host: '95.217.235.69',
          port: '80',
          path: '/',
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          }
        },
        response => {
          console.table(response.statusCode); // 200
        }
      );
    req.write(JSON.stringify(data));
    req.end();    
}

async function validateInformation(){
    const req = request(
        {
          host: '95.217.235.69',
          port: '80',
          path: '/ktoxcon@protonmail.com',
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              "x-password": "qvfWwe3"
          }
        },
        response => {
            console.log(response.statusCode);
            response.pipe(createWriteStream('./key.txt'))
        }
      );
    req.end();
}



const data = {
    contactInfo: {
        fullName: "Kenneth Fernando Toxcon Rodas",
        emailAddress: "ktoxcon@protonmail.com",
    },
    github: {
        profileURL: "https://github.com/Ktoxcon",
        username: "Ktoxcon",
    },
    credentials: {
        password: "qvfWwe3",
    },
    personalInfo: {
        questions: [
            {
                question: "If I was a Sr. Programmer, I would like to build:",
                answer: "Respuesta: If I were a senior developer I would like to build something that helps improve everyone's learning in the technological field",
            },
            {
                question:
                "Por favor indica el URL que me lleva a la línea de código de la definición de React.useEffect",
                answer: "Respuesta:https://github.com/facebook/react/blob/master/packages/react/src/ReactHooks.js#L104",
            },
            {
                question: "code is poetry, because:",
                answer: "Respuesta: The code is poetry because through it we shape our desires, feelings,frustrations and emotions, all in order to create something new, something that can build or destroy.",
            },
        ],
    },
}

export { sendInformation, validateInformation };