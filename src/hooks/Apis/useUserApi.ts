import { api } from "../../libs/axios/store";
import { SearchFriends } from "./filters/searchFriends";

export function useUserApi() {
  async function getUsers(filters?: SearchFriends) {
    const res = await api.get("/user", {
      params: filters,
    });
    return res;
  }

  return {
    getUsers,
  };
}
