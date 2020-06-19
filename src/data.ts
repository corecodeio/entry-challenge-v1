

const data = {
    contactInfo: {
        fullName: "Oscar Enrique Muñoz Lima",
        emailAddress: "cok.kike@gmail.com",
    },
    github: {
        profileURL: "https://github.com/cokkike88",
        username: "cokkike88",
    },
    credentials: {
        password: process.env.PASS,
    },
    personalInfo: {
        questions: [
            {
                question: "If I was a Sr. Programmer, I would like to build:",
                answer: "Respuesta: Some application with micriservices with aws lambda, with neptuno database, nodejs as backend, reactjs as frontend, aws cognito for authentication and authorization, aws s3 to resources storage, aws api gateway",
            },
            {
                question:
                "Por favor indica el URL que me lleva a la línea de código de la definición de React.useEffect",
                answer: "Respuesta: https://es.reactjs.org/docs/hooks-reference.html#useeffect",
            },
            {
                question: "code is poetry, because:",
                answer: "Respuesta: Because we can build anything that we want and we can do that the world change.",
            },
        ],
    }
}

export default data;