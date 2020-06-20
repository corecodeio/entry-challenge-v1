
import { request } from "http";

/**
 * postProfile
 * parameters url, port, email, password
 */
export async function getProfile(url: string, port: number, email: string, password: string) {
    const req = request(
      {
        host: `${url}`,
        port: `${port}`,
        path: `/${email}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-password": password,
        },
      },

      (response) => {        
          console.log(response.statusCode);                      
      },
    );
    req.end();
  }
