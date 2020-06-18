import fs from 'fs'; 

const LeerArchivo = path => {

const data = ""
fs.readFile(path, 'utf-8', (err, data) => { 
    if (err) {
        console.log("error " + err); 
    }; 
    
});

return data;
};

export default LeerArchivo;