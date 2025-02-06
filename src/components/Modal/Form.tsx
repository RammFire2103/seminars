import { createContext, FC, ReactNode, useRef } from "react";

import FormField from "./components/FormField";
import FormInput from "./components/FormInput";
import FormSendButton from "./components/FormSendButton";
import FormCancelButton from "./components/FormCancelButton";

import { CardType, editCard } from "../../store/cardsSlice";

import "./ModalForm.css";
import { useDispatch } from "react-redux";
import { changeModalState } from "../../store/modalSlice";

//Тип для пропсов формы
interface FromProps {
  card: CardType | undefined;
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const FormContext = createContext<CardType | undefined>(undefined);

const Form: FC<FromProps> & {
  Field: typeof FormField;
  Input: typeof FormInput;
  SendButton: typeof FormSendButton;
  CancelButton: typeof FormCancelButton;
} = ({ card, children }) => {
  const dispatch = useDispatch();
  const messageBox = useRef<HTMLDivElement>(null);

  //Запрос PUT для обновление записи на сервере
  const updatePost = async (id: string, updatedData: CardType) => {
    try {
      const response = await fetch(`http://localhost:3000/seminars/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        dispatch(changeModalState(undefined));
        dispatch(editCard(updatedData));
      } else {
        console.error("Ошибка обновления данных");
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  //функция для валидации введенных изменений
  const onSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (card) {
      const formElements = e.target as HTMLFormElement;

      //ПОлучение данных из формы
      const title = (
        formElements.elements.namedItem("title") as HTMLInputElement
      ).value;
      const description = (
        formElements.elements.namedItem("description") as HTMLInputElement
      ).value;
      let date = (formElements.elements.namedItem("date") as HTMLInputElement)
        .value;
      const time = (formElements.elements.namedItem("time") as HTMLInputElement)
        .value;

      const [year, month, day] = date.split("-");
      date = `${day}.${month}.${year}`;

      //Валидация
      if (
        title === card.title &&
        description === card.description &&
        date === card.date &&
        time === card.time
      ) {
        dispatch(changeModalState(undefined));
      } else if (title.trim() === "" || description.trim() === "") {
        messageBox.current?.classList.add("show-message");
      } else {
        updatePost(card.id, {
          ...card,
          title: title,
          description: description,
          date: date,
          time: time,
        });
      }
    }
  };

  return (
    <FormContext.Provider value={card}>
      <form onSubmit={(e) => onSubmit(e)}>{children}</form>
      <div ref={messageBox} className="form__message-box">
        Поля не должны быть пустыми!
      </div>
    </FormContext.Provider>
  );
};

Form.Field = FormField;
Form.Input = FormInput;
Form.SendButton = FormSendButton;
Form.CancelButton = FormCancelButton;

export default Form;
