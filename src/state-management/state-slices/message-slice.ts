import { createSlice } from "@reduxjs/toolkit";

export interface PublicMessage {
  _id: string;
  from_id: string;
  message: string;
  // add delivered?
  //  - send message, server changes delivered to true and returns it
  // in future I want to add room to be visible in
}

const publicMessage: PublicMessage[] = [
  {
    _id: "",
    from_id: "",
    message: "",
  },
];

export const publicMessageSlice = createSlice({
  name: "publicMessage",
  initialState: {
    publicMessage,
  },
  reducers: {
    recordMessage: (state, action) => {
      state.publicMessage = [...publicMessage, action.payload];
    },
  },
});

export const { recordMessage } = publicMessageSlice.actions;
export default publicMessageSlice.reducer;
