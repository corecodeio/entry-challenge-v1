require('dotenv').config();

const data ={
    "contactInfo": {
        "fullName": "Isaias Samuel Puga Solares",
        "emailAddress": "puga.isaias@gmail.com"
    },
    "github": {
        "profileURL": "https://github.com/pugaIsaias",
        "username": "pugaIsaias"
    },
    "credentials": {
        "password": process.env.API_KEY
    },
    "personalInfo": {
        "questions": [
            {
                "question": "If I was a Sr. Programmer, I would like to build:",
                "answer": "Respuesta: Develop games, and good experiences"
            },
            {
                "question":
                "Por favor indica el URL que me lleva a la línea de código de la definición de React.useEffect",
                "answer": "Respuesta: https://github.com/facebook/react/blob/655affa302437208e6f03c9ca6d170ea1707ace3/packages/react-reconciler/src/ReactFiberHooks.new.js#L1878"
            },
            {
                "question": "code is poetry, because:",
                "answer": "Respuesta: It has free form, can be fun, or tragic. And with words you build something that can be enjoyed by yourself, or others."
            }
        ]
    }
}

export { data };

