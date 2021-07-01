import { createSlice } from "@reduxjs/toolkit";
// With this, I'm wanting to grab all of the user's data and store it in one object

export const userSlice = createSlice({
  name: "activeUser",
  initialState: {
    activeUser: {
      _id: "",
      username: "",
      email: "",
    }, // add more user state later on
  },
  reducers: {
    login: (state, action) => {
      console.log("payload: ", action.payload)
      localStorage.setItem("authToken", action.payload.token)
      state.activeUser = action.payload.user
    },
    
  },
});

//export const fetchActiveUser = (state) => createSelector(
//)

export const { login } = userSlice.actions;
export default userSlice.reducer
