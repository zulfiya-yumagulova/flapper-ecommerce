import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemsComponent from "./Componets/ItemsComponent";
import Navbar from "./Componets/Navbar";
import Home from "./Componets/Home";
import Item from "./Componets/Item";
import About from "./Componets/About";
import AboutLink from "./Componets/AboutLink";
import Contact from "./Componets/Contact";
import Footer from "./Componets/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
                <ItemsComponent />
              </>
            }
          />
          <Route exact path="/:id" element={<Item />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <AboutLink />
        <Footer />
      </Router>
    </>
  );
}

export default App;
