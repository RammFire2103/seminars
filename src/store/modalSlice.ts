import { createSlice } from "@reduxjs/toolkit";

export interface Modalstate {
  show: boolean;
  cardID: string | undefined;
}

const initialState: Modalstate = { show: false, cardID: undefined };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    //Изменение стейта модального окна
    changeModalState: (state, action) => {
      state.show = !state.show;
      state.cardID = action.payload;
    },
  },
});

export const { changeModalState } = modalSlice.actions;
export default modalSlice.reducer;
