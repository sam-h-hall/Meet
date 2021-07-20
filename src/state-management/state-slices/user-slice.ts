import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export interface ActiveUser {
  _id: number;
  username: string;
  email: string;
}

const activeUser: ActiveUser = { _id: 0, username: "", email: "" };

export const userSlice = createSlice({
  name: "activeUser",
  initialState: {
    activeUser,
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      Axios.post("http://localhost:8000/login", action.payload)
        .then((res) => {
          localStorage.setItem("authToken", res.data.token);
          state.activeUser = res.data.user;
        })
        .catch((err) => {
          console.log("login err: ", err, "\n", action.payload);
        });
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
