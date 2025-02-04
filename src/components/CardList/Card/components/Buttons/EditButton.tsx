import { FC, useContext } from "react";
import { CardContext } from "../../Card";

const CardEditButton: FC = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("CardContent must be used within a Card");
  }

  return (
    <button className="card__button card__button_edit" onClick={context.onEdit}>
      Edit
    </button>
  );
};

export default CardEditButton;
