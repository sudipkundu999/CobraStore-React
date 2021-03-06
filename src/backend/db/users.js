import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Alex",
    lastName: "Smith",
    email: "alex@cobrastore.com",
    password: "cobrastore",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sudip",
    lastName: "Kundu",
    email: "sudipkundu@cobrastore.com",
    password: "sudipkundu",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
