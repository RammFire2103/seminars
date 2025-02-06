import { FC } from "react";

import ClassicCard from "./Card/ClassicCard";

import { useSelector } from "react-redux";

import { AppState } from "../../store/store";
import { CardType } from "../../store/cardsSlice";

import "./CardList.css";

const CardList: FC = () => {
  //Получение массива карт из стейта
  const cards = useSelector((state: AppState) => state.cards.cards);

  return (
    <div className="card-list">
      {cards.map((card: CardType) => (
        <ClassicCard key={card.id} card={card}></ClassicCard>
      ))}
    </div>
  );
};

export default CardList;
