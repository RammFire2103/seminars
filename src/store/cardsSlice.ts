import { createSlice } from "@reduxjs/toolkit";

export interface CardType {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
}

interface CardsState {
  cards: CardType[];
}

const initialState: CardsState = { cards: [] };

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCards: (state, action) => {
      const filtered = state.cards.filter(
        (item1: CardType) =>
          !action.payload.some((item2: CardType) => item2.id === item1.id)
      );
      state.cards = [...filtered, ...action.payload];
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    editCard: (state, action) => {
      state.cards = state.cards.map((card) =>
        card.id === action.payload.id ? { ...action.payload } : card
      );
    },
  },
});

export const { deleteCard, editCard, addCards } = cardsSlice.actions;
export default cardsSlice.reducer;
