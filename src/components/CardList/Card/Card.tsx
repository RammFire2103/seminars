import { createContext, FC, ReactNode } from "react";

import { ClassicCardProps } from "./ClassicCard";

import CardDeleteButton from "./components/Buttons/DeleteButton";
import CardEditButton from "./components/Buttons/EditButton";
import CardContent from "./components/Content/Content";
import CardDate from "./components/Date";
import CardTitle from "./components/Content/Title";
import CardImage from "./components/Image";
import CardButtonPanel from "./components/Buttons/ButtonsPanel";
import CardDescription from "./components/Content/Description";

import { CardType, deleteCard } from "../../../store/cardsSlice";

import "./Card.css";
import { useDispatch } from "react-redux";
import { changeModalState } from "../../../store/modalSlice";
import CardTime from "./components/Time";

type CardProps = ClassicCardProps & { children: ReactNode };

interface CardContextType {
  onEdit: () => void;
  onDelete: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CardContext = createContext<
  (CardContextType & CardType) | undefined
>(undefined);

const Card: FC<CardProps> & {
  Title: typeof CardTitle;
  DeleteButton: typeof CardDeleteButton;
  EditButton: typeof CardEditButton;
  Date: typeof CardDate;
  Time: typeof CardTime;
  Content: typeof CardContent;
  Image: typeof CardImage;
  ButtonPanel: typeof CardButtonPanel;
  Description: typeof CardDescription;
} = ({ card, children }) => {
  const dispatch = useDispatch();

  //Открытие модального окна при редактировании
  const onEdit = () => {
    dispatch(changeModalState(card.id));
  };

  //Запрос DELETE для удаление семинара на json сервере
  const onDelete = () => {
    fetch(`http://localhost:3000/seminars/${card.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch(deleteCard(card.id));
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <CardContext.Provider value={{ ...card, onEdit, onDelete }}>
      <div className="card">{children}</div>
    </CardContext.Provider>
  );
};

Card.Title = CardTitle;
Card.DeleteButton = CardDeleteButton;
Card.EditButton = CardEditButton;
Card.Date = CardDate;
Card.Time = CardTime;
Card.Content = CardContent;
Card.Image = CardImage;
Card.ButtonPanel = CardButtonPanel;
Card.Description = CardDescription;

export default Card;
