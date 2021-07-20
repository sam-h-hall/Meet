import { createSlice } from "@reduxjs/toolkit";

export interface PublicMessage {
  _from_id: number;
  from: string;
  message_id: number;
  message: string;
  // in future I want to add room to be visible in
}

const publicMessage = [
  {
    _from_id: 0,
    from: "",
    message_id: 0,
    message: "",
  },
];

export const publicMessageSlice = createSlice({
  name: "publicMessage",
  initialState: {
    publicMessage,
  },
  reducers: {
    sendMessage: (state, action) => {
      state.publicMessage = [...publicMessage, action.payload];
    },
  },
});
