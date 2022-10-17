import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemsComponent from "./Componets/ItemsComponent";
import Footer from "./Componets/Footer";
import Home from "./Componets/Home";
import Navbar from "./Componets/Navbar";
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ItemsComponent />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
