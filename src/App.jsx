import "./App.css";
import Header from "./components/Header";
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="px-md-5 d-inline-block">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
