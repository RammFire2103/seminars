import { FC, useContext } from "react";
import { CardContext } from "../../Card";

const CardTitle: FC = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("CardContent must be used within a Card");
  }

  return <h3 className="card__title">{context.title}</h3>;
};

export default CardTitle;
