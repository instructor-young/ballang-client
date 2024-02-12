import { client } from "..";
import { LogInDto, SignUpDto } from "./auth.dto";

async function signUp(dto: SignUpDto) {
  const response = await client.post("/auth/sign-up", dto);
  const data = response.data;

  return data;
}

async function logIn(dto: LogInDto) {
  const response = await client.post(`/auth/log-in`, dto);
  const data = response.data;

  return data;
}

const authAPI = {
  signUp,
  logIn,
};

export default authAPI;
