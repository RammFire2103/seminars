import { FC, useContext } from "react";
import { FormContext } from "../Form";

const FormInput: FC<{ type: string }> = ({ type }) => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("CardContent must be used within a Form");
  }

  //проверка типа intput
  switch (type) {
    case "title": {
      return (
        <input type="text" name="title" defaultValue={context.title}></input>
      );
    }
    case "description": {
      return (
        <input
          type="text"
          name="description"
          defaultValue={context.description}
        ></input>
      );
    }
    case "date": {
      const [day, month, year] = context.date.split(".");

      return (
        <input
          type="date"
          name="date"
          defaultValue={`${year}-${month}-${day}`}
        ></input>
      );
    }
    case "time": {
      return (
        <input type="time" name="time" defaultValue={context.time}></input>
      );
    }
  }
};

export default FormInput;
