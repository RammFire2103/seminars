import { FC, useContext } from "react";
import { CardContext } from "../../Card";

const CardTitle: FC = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("CardContent must be used within a Card");
  }

  return <h3 className="card__title">{context.title}</h3>;

  // return (
  //   <ClampLines
  //     text={context.title}
  //     id="card__title"
  //     lines={2}
  //     ellipsis="…"
  //     moreText="Expand"
  //     lessText="Collapse"
  //     className="card__title"
  //     innerElement="h3"
  //   />
  // );
};

export default CardTitle;
