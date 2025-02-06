import { FC, useContext, useState } from "react";
import { CardContext } from "../../Card";

const CardDeleteButton: FC = () => {
  const context = useContext(CardContext);

  const [showPopup, setShowPopup] = useState(false);

  if (!context) {
    throw new Error("CardContent must be used within a Card");
  }

  //обработка нажатия на кнопку подтвержденя удаления
  const handleDeleteConfirm = () => {
    context.onDelete();
    setShowPopup(false);
  };

  //обработка нажатия на кнопку отмены
  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <>
      <button
        className="card__button card__button_delete"
        onClick={() => setShowPopup(true)}
      >
        Delete
      </button>

      {showPopup && (
        <div className="card__popup">
          <p>Вы уверены, что хотите удалить запись?</p>
          <div className="popup__buttons">
            <button onClick={handleDeleteConfirm}>Да</button>
            <button onClick={handleCancel}>Нет</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDeleteButton;
