import axios from "axios";

export default async () => {
  try {
    return axios.get("./user.json");
  } catch (error) {
    console.log(error);
  }
};
