
import { request } from "http";


/**
 * postProfile
 * parameters url, port, json data
 */
export async function postProfile(url: string, port: number, profile: JSON) {
    const req = request(
        {
          host: `${url}`,
          port: `${port}`,
          path: "/",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        },
        (response) => {
          console.table(response.statusCode);
        },
      );    
      req.write(JSON.stringify(profile));
      req.end();

}
