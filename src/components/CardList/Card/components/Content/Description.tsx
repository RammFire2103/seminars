import { FC, useContext } from "react";
import { CardContext } from "../../Card";

const CardDescription: FC = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("CardContent must be used within a Card");
  }

  return <p>{context.description}</p>;
};

export default CardDescription;
