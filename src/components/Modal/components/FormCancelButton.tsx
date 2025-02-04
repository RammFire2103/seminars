import { FC } from "react";
import { changeModalState } from "../../../store/modalSlice";
import { useDispatch } from "react-redux";

const FormCancelButton: FC = () => {
  const dispatch = useDispatch();

  return (
    <button type="button" onClick={() => dispatch(changeModalState(undefined))}>
      Отмена
    </button>
  );
};

export default FormCancelButton;
