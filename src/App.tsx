import { useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import { useDispatch } from "react-redux";
import { addCards } from "./store/cardsSlice";
import ModalFrom from "./components/Modal/ModalForm";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/seminars", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(addCards(data));
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  return (
    <>
      <header>
        <h3>Семинары</h3>
      </header>
      <div className="content">
        <CardList></CardList>
      </div>

      <ModalFrom></ModalFrom>
    </>
  );
}

export default App;
