/**
 * nombre: Luis Abel Pozuelos Juares
 * correo: lpozuelos@irc.com.gt
 */

// import post profile function
import { postProfile } from "./postProfile";
// import get profile funtion
import { getProfile } from "./getProfile";
// envieroment vars
require("dotenv").config();
//importamos informacion del perfil
const profile = require("./profile.json");

profile.credentials.password = process.env.CLAVE;
//call function PostProfile
postProfile(process.env.URL, profile);
//call gunction getProfile
getProfile(process.env.URL, profile.contactInfo.emailAddress, process.env.CLAVE);
