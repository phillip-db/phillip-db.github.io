import "./App.css";
import Header from "./components/Header";
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="cardContainer">
      <Header />
      <Home />
    </div>
  );
}

export default App;
