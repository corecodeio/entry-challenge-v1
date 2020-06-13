// Estoy utilizando FETCH API y Promises (promesas)
// Y html para interpretar el documento
// Petición Post
// Url: http://95.217.235.69/

// Agrego los datos
let challengeUserData = {
	contactInfo: {
		fullName: 'Jefferson Alexander Bol Lopez',
		emailAddress: 'jeffabl502@gmail.com',
	},
	github: {
		profileURL: 'https://github.com/JeffLopez502',
		username: 'JeffLopez502',
	},
	credentials: {
		// Por seguridad no mostrare la constraseña utilizada
		password: '  ',
	},
	personalInfo: {
		questions: [
	        {
	            question: 'If I was a Sr. Programmer, I would like to build',
				answer: 'Me gustaría construir una marketplace que promueva el crecimiento económico de los guatemaltecos.',
	        },
	        {
	            question: 'Por favor indica el URL que me lleva a la línea de código de la definición de React.useEffect',
				answer: 'https://reactjs.org/docs/hooks-effect.html#:~:text=What%20does%20useEffect%20do%3F,after%20performing%20the%20DOM%20updates.',
	        },
	        {
	            question: 'code is poetry, because',
				answer: 'El codigo nos permite plasmar nuestros pensamientos, darle forma a estos y mostrar a los demas, cada quien programa diferente a los demas y esa caracteristica de mostrar ideas y formas de pensar con codigo podria interpretarse como poesia',
	        },
    	],
	},
};

// Realizo la petición post
fetch( 'http://95.217.235.69/', {
	method: 'POST',
	// Envio los datos en formato JSON
	body: JSON.stringify( challengeUserData ), 
	headers: {
		"Content-Type": "application/json"
	}
}).then( resp => resp.json() )
.then( console.log )
.catch( error => {
	// Si existe un error lo recibo en el catch
	console.log( 'Error en la Petición' );
	console.log( error );
});

// Petición GET
// Url: http://95.217.235.69/jeffabl502@gmail.com
// Una vez realizado en posteo realizo una petición GET

fetch( 'http://95.217.235.69/jeffabl502@gmail.com', {
	method: 'GET',
	headers: {
		"Content-Type": "application/json",
    	"x-password": "  "
	}
}).then( resp => resp.json() )
.then( console.log )
.catch( error => {
	// Si existe un error lo muestro en el catch
	console.log( 'Error en la Petición' );
	console.log( error );
});
