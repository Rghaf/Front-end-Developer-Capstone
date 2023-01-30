import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";

function App() {
  return (
    <BrowserRouter basename="/">
      <Main />
    </BrowserRouter>
  );
}

export default App;
