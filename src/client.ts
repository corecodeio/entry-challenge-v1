import { request } from "http";

const myInformation = {
    contactInfo: {
        fullName: "Manuel Alessandro Concoba Núñez",
        emailAddress: "mconcoba20@gmail.com",
    },
    github: {
        profileURL: "https://github.com/MConcoba",
        username: "MConcoba",
    },
    credentials: {
        password: "concoba123",
    },
    personalInfo: {
        questions: [
            {
                question: "If I was a Sr. Programmer, I would like to build:",
                answer: "Functional programming solutions for people who lack the tools or skills to achieve their goal, as long as it is for the common good.",
            },
            {
                question:"Por favor indica el URL que me lleva a la línea de código de la definición de React.useEffect",
                answer: "https://github.com/facebook/react/blob/master/packages/react/src/ReactHooks.js#L104",
            },
            {
                question: "code is poetry, because:",
                answer: "Poetry is art, art is defined as a way to convey feelings creating something that is unique and original.",
            },
        ],
    },
}

async function sendMyInformation(){
    const req = request (
        {
            port: '80',
            host: '95.217.235.69',
            path: '/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    req.write(JSON.stringify(myInformation));
    req.end();
}

export { sendMyInformation }