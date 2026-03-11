import { useDispatch } from "react-redux";
import { AppDispatch } from "../libs/axios/store/store";
import { exitUuser } from "../libs/axios/store/slices/UserSlice";

export const UseDisptach = () => {
  const dispatch = useDispatch<AppDispatch>();

  
  //users
  function logoutUser() {
    dispatch(exitUuser());
  }

  return {
    logoutUser,
  };
};
