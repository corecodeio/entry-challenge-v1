/** 
 * nombre: Luis Abel Pozuelos Juares 
 * correo: lpozuelos@irc.com.gt
*/

import axios from 'axios'

/**
 * postProfile
 * parameters url,  json data
 */
export async function postProfile(url, profile) {

  axios.post(`http://${url}/`, profile)
    .then((res) => {
      console.log(res.status);  
    })
    .catch((err) => {
      console.error("error " + err);
    });
}