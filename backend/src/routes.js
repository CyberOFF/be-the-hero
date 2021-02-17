const express = require("express");
const OngController = require("./controller/OngController");
const IncidentController = require("./controller/IncidentController");
const ProfileController = require("./controller/ProfileController");
const SessionController = require("./controller/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create); //Login

//Ongs Criação e Listagens
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

// Criaçao, Listagem e Remoçao de Casos
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

//Listagem de Casos de uma ONG especficia
routes.get("/profile", ProfileController.index);

module.exports = routes;
