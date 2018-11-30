import { Request, Response } from "express";
const usersService = require("./users.service");

export const readAll = async (req: Request, res: Response) => {
  try {
    const users = await usersService.readAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send("error");
  }
};

export const readById = async (req: Request, res: Response) => {
  try {
    const user = await usersService.readById(req.params.id);
    user ? res.status(200).send(user) : res.status(404).send("user not found");
  } catch (error) {
    console.log(error);
    res.status(500).send("error has occured");
  }
};
