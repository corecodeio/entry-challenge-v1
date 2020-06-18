import getPassword from './../function/pass';

const data = {
    "contactInfo": {
        "fullName": "Saul Lopez",
        "emailAddress": "saullopezc@gmail.com"
    },
    "github": {
        "profileURL": "https://github.com/saullopezc",
        "username": "saullopezc"
    },
    "credentials": {
        "password": getPassword()
    },
    "personalInfo": {
        "questions": [
            {
                "question": "If I was a Sr. Programmer, I would like to build:",
                "answer": "Paquetes o librerias "
            },
            {
                "question": "Por favor indica el URL que me lleva a la línea de código de la definición de React.useEffect",
                "answer": "https://es.reactjs.org/docs/hooks-reference.html#useeffect"
            },
            {
                "question": "code is poetry, because:",
                "answer": "Por la expresion y la belleza del codigo"
            }
        ]
    }
};

export default data;