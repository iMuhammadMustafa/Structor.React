import { IUser } from "./Register.page";

const baseURL = "https://abf073d8-e653-4f4e-9087-d9e9c3231202.mock.pstmn.io";

const doesUserExists = async (email: string) => {
  const url = `${baseURL}/doesExist?email="${email}"`;
  const response = await fetch(url, {
    method: "GET",
  }).then(res => res.json());
  return response.data;
};

const RegisterUser = async (user: IUser) => {
  const url = `${baseURL}/register`;
  const response = await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then(res => res.json());
  const data = await response.data;
  return data;
};

const LoginUser = async (user: IUser) => {
  const url = `${baseURL}/login`;
  const response = await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then(res => res.json());
  const data = await response.data;
  return data;
};

const SetTokens = (tokens: IAuthTokens) => {
  localStorage.setItem("accessToken", tokens.accessToken);
  localStorage.setItem("refreshToken", tokens.refreshToken);
};
const RetrieveTokens = () => {
  const tokens: IAuthTokens = {
    accessToken: localStorage.getItem("accessToken") ?? "",
    refreshToken: localStorage.getItem("refreshToken") ?? "",
  };
  return tokens;
};

interface IAuthTokens {
  accessToken: string;
  refreshToken: string;
}

interface IAuthResponse {
  status: boolean;
  statusCode: number;
  data: IAuthTokens;
}

export { doesUserExists, RegisterUser, LoginUser, SetTokens, RetrieveTokens };
