import "./App.css";
import Header from "./components/Header";
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./views/Projects";

function App() {
  return (
    <>
      <Router>
        <div id="wrapper">
          <Header />
          <div
            id="content"
            className="mx-auto px-md-5 d-flex justify-content-center"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </div>
        <div style={{ flex: 1 }} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
