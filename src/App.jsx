import "./App.css";
import Header from "./components/Header";
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import About from "./views/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div id="wrapper">
        <Router>
          <Header />
          <div id="content" className="py-md-3 px-md-5 d-inline-block">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </div>
      <div style={{ flex: 1 }} />
      <Footer />
    </>
  );
}

export default App;
