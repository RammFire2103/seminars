import { FC, ReactNode, useContext } from "react";
import { CardContext } from "../../Card";

const CardContent: FC<{ children: ReactNode }> = ({ children }) => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("CardContent must be used within a Card");
  }

  return <div className="card__content">{children}</div>;
};

export default CardContent;
