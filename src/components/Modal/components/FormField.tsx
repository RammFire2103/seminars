import { FC, ReactNode } from "react";
import Form from "../Form";

const FormField: FC<{ children: ReactNode; type: string }> = ({
  children,
  type,
}) => {
  return (
    <div className="form__field">
      <label>{children}</label>
      <Form.Input type={type}></Form.Input>
    </div>
  );
};

export default FormField;
