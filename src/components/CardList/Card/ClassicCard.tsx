import { FC } from "react";
import { CardType } from "../../../store/cardsSlice";

import Card from "./Card";

export interface ClassicCardProps {
  card: CardType;
}

const ClassicCard: FC<ClassicCardProps> = ({ card }) => {
  return (
    <Card card={card}>
      <Card.Image></Card.Image>
      <Card.Content>
        <Card.Title></Card.Title>
        <Card.Description></Card.Description>
        <Card.Time></Card.Time>
        <Card.Date></Card.Date>
      </Card.Content>
      <Card.ButtonPanel>
        <Card.DeleteButton></Card.DeleteButton>
        <Card.EditButton></Card.EditButton>
      </Card.ButtonPanel>
    </Card>
  );
};

export default ClassicCard;
