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
          console.table(response.statusCode);
        }
      );
    req.write(JSON.stringify(data));
    req.end();    
}

async function showInformation(){
    const req = request(
        {
          host: '95.217.235.69',
          port: '80',
          path: '/angelmrg2000@gmail.com',
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              "x-password": "Reyesg2000"
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
        fullName: "Angel Miguel Reyes Guerrero",
        emailAddress: "angelmrg2000@gmail.com",
    },
    github: {
        profileURL: "https://github.com/areyes2018391",
        username: "areyes2018391",
    },
    credentials: {
        password: "Reyesg2000",
    },
    personalInfo: {
        questions: [
            {
                question: "If I was a Sr. Programmer, I would like to build:",
                answer: "Respuesta: If I would like to build a shopping app, because i could sell it and make money with it, also it would be a complex app",
            },
            {
                question:
                "Por favor indica el URL que me lleva a la línea de código de la definición de React.useEffect",
                answer: "Respuesta:https://github.com/facebook/react/blob/master/packages/react/src/ReactHooks.js#L104",
            },
            {
                question: "code is poetry, because:",
                answer: "Respuesta: Because the poetry is something that only the person that wrote it, can understand it at the perfection, and cause you can do anything what you want with it",
            },
        ],
    },
}

export { sendInformation, showInformation };