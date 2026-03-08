import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  firstName: string;
  email: string;
  lastName: string;
  birthday: string;
  acessToken: string;
};

const userState: UserState = {
  email: "",
  birthday: "",
  firstName: "",
  lastName: "",
  acessToken: "",
};

const userSlice = createSlice({
  initialState: userState,
  name: "USER-AUTH",
  reducers: {
    setUser: (_, action: PayloadAction<UserState>) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
