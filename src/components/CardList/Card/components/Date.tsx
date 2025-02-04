import { FC, useContext } from "react";
import { CardContext } from "../Card";

const CardDate: FC = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("CardContent must be used within a Card");
  }

  return (
    <div className="card__date">
      <label>{context.date}</label>
    </div>
  );
};

export default CardDate;
