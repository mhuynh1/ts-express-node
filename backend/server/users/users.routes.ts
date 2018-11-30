import { Router } from "express";
const router = Router();
const usersController = require("./users.controller");

router.get("/", usersController.readAll),
  router.get("/:id([0-9a-fA-F]{24})", usersController.readById),
  (module.exports = router);
