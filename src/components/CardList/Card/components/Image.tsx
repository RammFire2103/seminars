import { FC, useContext } from "react";
import { CardContext } from "../Card";

const CardImage: FC = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("CardContent must be used within a Card");
  }

  return <img className="card-image" src={context.photo} />;
};

export default CardImage;
