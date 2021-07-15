import { createSlice } from "@reduxjs/toolkit";

export interface ActiveUser {
  _id: number,
  username: string,
  email: string,
}

const activeUser: ActiveUser = { _id: 0, username: "", email: "" };

export const userSlice = createSlice({
  name: "activeUser",
  initialState: {
    activeUser
  },
  reducers: {
    // may need to change action to action: PayloadAction<some type>
    login: (state, action) => {
      console.log("payload: ", action.payload);
      localStorage.setItem("authToken", action.payload.token);
      state.activeUser = action.payload.user;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
