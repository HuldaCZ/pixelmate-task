import axios from "axios";
import { UserI } from "../Types";

export async function getUsers() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  const users = res.data;

  return users.map((user: UserI) => {
    return {
      user: user,
    };
  });
}
