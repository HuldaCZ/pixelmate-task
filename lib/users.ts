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

export async function getUserData(userId: any) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

  const user = res.data;

  return {
    user: user,
  };
}
