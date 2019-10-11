import { Api, parseResponse, getErrorMessage } from "../../networkConfig";

export default async () => {
  const url = `api/0.8/?results=20`;
  try {
    const response = await Api.get(url);
    console.log(response);

    if (response.status !== 200) return { error: "Error, 200 not obtained" };

    return parseResponse(response.data);
  } catch (error) {
    return getErrorMessage(error);
  }
};
