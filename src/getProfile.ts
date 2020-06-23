/**
 * nombre: Luis Abel Pozuelos Juares
 * correo: lpozuelos@irc.com.gt
 */
import { request } from "http";
import axios from "axios";

/**
 * postProfile
 * parameters url, port, email, password
 */

export async function getProfile(url: string, email: string, passowrd: string) {
  axios
    .get(`http://${url}/` + email, {
      headers: { "Content-Type": "application/json", "x-password": passowrd },
    })
    .then((res) => {
      console.log(res.data.bienvenido.claveDeAcceso);
    })
    .catch((error) => {
      console.log("error " + error);
    });
}
