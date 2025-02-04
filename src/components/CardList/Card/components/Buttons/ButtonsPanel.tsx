import { FC, ReactNode } from "react";

const CardButtonPanel: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="button-panel">{children}</div>;
};

export default CardButtonPanel;
