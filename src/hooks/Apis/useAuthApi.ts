import { api } from "../../libs/axios/store";
import { CreateAccountType, LoginType } from "../../schemas/validationAccount";

export function useAuthApi() {
  async function singnIn(crendentials: LoginType) {
    console.log("ol");
    const res = await api.post("/auth", crendentials);
    return res;
  }

  async function singnUp(crendentials: CreateAccountType) {
    const res = await api.post("/user/create", crendentials);
    return res;
  }

  async function forgotPassword() {}

  return {
    singnIn,
    singnUp,
    forgotPassword,
  };
}
