import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  fullName: string;
  email: string;
  birthday: string;
  acessToken: string | null;
};

const userState: UserState = {
  email: "",
  fullName: "",
  birthday: "",
  acessToken: "",
};

const userSlice = createSlice({
  initialState: userState,
  name: "USER-AUTH",
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    exitUuser: (state) => {
      state.acessToken = null;
    },
  },
});

export const { setUser, exitUuser } = userSlice.actions;
export default userSlice.reducer;
