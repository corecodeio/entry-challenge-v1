# Prueba de acceso a core-code.io v20.06.11

Welcome to Core Code entry challenge.

Please follow the instructions and submit them before 2020/06/24.

## Instructions

### 1. Send a POST request to `http://95.217.235.69/` with the following data:

```
contactInfo: {
    fullName: "",
    emailAddress: "",
},
github: {
    profileURL: "",
    username: "",
},
credentials: {
    password: "Cambia esta contraseña a una que sólo tú sepas",
},
personalInfo: {
    questions: [
        {
            question: "If I was a Sr. Programmer, I would like to build:",
            answer: "Respuesta: ...",
        },
        {
            question:
            "Por favor indica el URL que me lleva a la línea de código de la definición de React.useEffect",
            answer: "Respuesta: ...",
        },
        {
            question: "code is poetry, because:",
            answer: "Respuesta: ...",
        },
    ],
},
```

### 2. Verify that your information was saved successfully

Send a GET request to the URL `http://95.217.235.69/:emailAddress` with the following headers:

```
{
    "Content-Type": "application/json",
    "x-password": "tu contraseña especificada en el paso anterior"
}
```

The URL param `emailAddress` should be the email address you specified in the previous POST request.

### 3. Ya casi

You should get a response with a valid `claveDeAcceso`.

### 4. Envía la contraseña y la solución

Send an email to `gus@core-code.io`, cc'd to `sc@core-code.io`, with the following information:

Asunto: `emailAddress@claveDeAcceso`

El cuerpo del mensaje debe contener un link al repositorio de Github donde está el código que usaste para resolver el acertijo, es decir, el código que envió el POST y el GET request.

### 5. Espera la invitación de Github a tu correo registrado (Si no la recibes, es porque no te hemos aceptado)

Agregaremos tu usuario de Github a la organización de [corecodeio](https://github.com/corecodeio).

# Bienvenido a Core Code

Estás listo para iniciar tu carrera como Ingeniero de Software.
