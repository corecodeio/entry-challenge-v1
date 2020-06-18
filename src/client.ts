const axios = require('axios');

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
        "password": "YwQuIzgsSTyDURgXq9Ot"
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

export const createProfile = async () => {
    try {
        const res = await axios.post('http://95.217.235.69/', data);
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
        listProfile();
    } catch (err) {
        console.error(err);
    }
};

export const listProfile = () => {

    const URL = "http://95.217.235.69/saullopezc@gmail.com"
    /*var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-password", "YwQuIzgsSTyDURgXq9Ot");
    console.log(myHeaders);*/
    axios.get(URL, { 
        headers: {"x-password": "YwQuIzgsSTyDURgXq9Ot", "Content-Type": "application/json" }})
    .then(response => {
        // If request is good...
        console.log(response.data);

     })
    .catch((error) => {
        console.log('error ' + error);
     });

};