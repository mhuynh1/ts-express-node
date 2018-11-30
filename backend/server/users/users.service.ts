import { ObjectId } from "mongodb";
import { db } from "../mongodb";

export const readAll = () => {
  return db()
    .collection("users")
    .find()
    .map((user: any) => {
      user._id = user._id.toString();
      return user;
    })
    .toArray();
};

export const readById = (id: string) => {
  return db()
    .collection("users")
    .findOne({ _id: { $eq: new ObjectId(id) } });
};

