import { createSlice } from "@reduxjs/toolkit";

export interface CardType {
  //Тип для карточек семинаров
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
    //Добавление семинаров в стейт
    addCards: (state, action) => {
      const filtered = state.cards.filter(
        (item1: CardType) =>
          !action.payload.some((item2: CardType) => item2.id === item1.id)
      );
      state.cards = [...filtered, ...action.payload];
    },
    //Удаление семинара из стейта
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    //Редактирование записи о семенаре
    editCard: (state, action) => {
      state.cards = state.cards.map((card) =>
        card.id === action.payload.id ? { ...action.payload } : card
      );
    },
  },
});

export const { deleteCard, editCard, addCards } = cardsSlice.actions;
export default cardsSlice.reducer;
