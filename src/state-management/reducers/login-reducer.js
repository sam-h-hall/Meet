import { createSlice } from "@reduxjs/toolkit";
// With this, I'm wanting to grab all of the user's data and store it in one object

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      _id: "",
      username: "",
      email: "",
    }, // add more user state later on
  },
  reducers: {
    login: (state, action) => {
      console.log("login reducer firing")
      state.user = action.payload
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer
