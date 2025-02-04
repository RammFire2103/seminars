import { FC, useContext } from "react";
import { CardContext } from "../Card";

const CardTime: FC = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("CardContent must be used within a Card");
  }

  return (
    <div className="card__date">
      <label>{context.time}</label>
    </div>
  );
};

export default CardTime;
