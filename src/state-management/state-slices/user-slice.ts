import { createSlice } from "@reduxjs/toolkit";

export interface ActiveUser {
  _id: number;
  username: string;
  email: string;
}

const activeUser: ActiveUser = {
  _id: 0,
  username: "",
  email: "",
};

export const userSlice = createSlice({
  name: "activeUser",
  initialState: {
    activeUser,
  },
  reducers: {
    login: (state, action) => {
      state.activeUser = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
