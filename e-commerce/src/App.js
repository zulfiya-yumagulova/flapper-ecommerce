import { Routes, Router, Route } from "react-router-dom";
import ItemsComponent from "./Componets/ItemsComponent";
import Footer from "./Componets/Footer";
import Home from "./Componets/Home";
import Navbar from "./Componets/Navbar";
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar />
      <ItemsComponent />
      <Footer />
    </>
  );
}

export default App;
