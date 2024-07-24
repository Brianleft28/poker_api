"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var crypto_1 = require("crypto");
// generar una clave API dinámica
var generateApiKey = function () {
    return (0, crypto_1.randomBytes)(16).toString("hex");
};
var apiKey = generateApiKey();
// leer el contenido actual del archivo .env
var envFilePath = "./.env";
var envFileContent = fs.existsSync(envFilePath)
    ? fs.readFileSync(envFilePath, "utf-8")
    : "";
// agregar o actualizar la api key en el archivo .env
if (envFileContent.includes("API_KEY=")) {
    envFileContent = envFileContent.replace(/API_KEY=(.*)/g, "API_KEY=".concat(apiKey));
}
else {
    envFileContent += "\nAPI_KEY=".concat(apiKey);
}
// escribir el archivo .env actualizado
try {
    fs.writeFileSync(envFilePath, envFileContent);
    console.log("API_KEY=".concat(apiKey, " added to .env file"));
}
catch (err) {
    console.error(err);
}
