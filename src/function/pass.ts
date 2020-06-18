import LeerArchivo from './readfile';

const path = "password.txt"

const getPassword = () => {
    return LeerArchivo(path);
}

export default getPassword;



