import "./App.css";
import Header from "./components/header/Header";
import About from "./views/about/About";
import Home from "./views/home/Home";

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
