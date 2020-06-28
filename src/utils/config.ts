import * as dotenv from "dotenv";

dotenv.config();
let path = `${__dirname}/../../.env`;
dotenv.config({ path: path });

export const PASSWORD_ENV = process.env.PASSWORD_ENV;
