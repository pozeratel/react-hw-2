import "./App.css";
import { Greating } from "./components/Greatings/Greatings";
import { Message } from "./components/Message/Message";

function App() {
  const nickname = prompt("Уведіть своє ім'я");
  return (
    <>
      <Greating name={"Привіт" + " " + nickname + "!"} />
      <Message text = {"Приємного користування сайтом!! "} />
    </>
  );
}

export default App;
