import "./App.css";
import Header from "./components/Header";
import About from "./views/About";
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
