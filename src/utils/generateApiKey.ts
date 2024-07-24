import * as fs from "fs";
import { randomBytes } from "crypto";

// generar una clave API dinámica
const generateApiKey = () => {
  return randomBytes(16).toString("hex");
};

const apiKey = generateApiKey();

// leer el contenido actual del archivo .env
const envFilePath = "./.env";
let envFileContent = fs.existsSync(envFilePath)
  ? fs.readFileSync(envFilePath, "utf-8")
  : "";

// agregar o actualizar la api key en el archivo .env
if (envFileContent.includes("API_KEY=")) {
  envFileContent = envFileContent.replace(/API_KEY=(.*)/g, `API_KEY=${apiKey}`);
} else {
  envFileContent += `\nAPI_KEY=${apiKey}`;
}

// escribir el archivo .env actualizado
try {
  fs.writeFileSync(envFilePath, envFileContent);
  console.log(`API_KEY=${apiKey} added to .env file`);
} catch (err) {
  console.error(err);
}
