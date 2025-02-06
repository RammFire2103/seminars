import { FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import Form from "./Form";

const ModalForm: FC = () => {
  //Получение данных из стейта
  const cardID = useSelector((state: AppState) => state.modal.cardID);

  const selectItemById = (state: AppState, id: string | undefined) =>
    state.cards.cards.find((item) => item.id === id);

  const card = useSelector((state: AppState) => selectItemById(state, cardID));
  const isModalOpen = useSelector((state: AppState) => state.modal.show);

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <Form card={card}>
              <h2>Редактор семинара</h2>
              <Form.Field type="title">Заголовок: </Form.Field>
              <Form.Field type="description">Описание: </Form.Field>
              <Form.Field type="date">Дата: </Form.Field>
              <Form.Field type="time">Время: </Form.Field>
              <Form.SendButton></Form.SendButton>
              <Form.CancelButton></Form.CancelButton>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalForm;
