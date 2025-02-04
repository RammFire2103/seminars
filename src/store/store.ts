import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cardsSlice";
import modalReducer from "./modalSlice";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    modal: modalReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
