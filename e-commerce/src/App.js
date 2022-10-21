import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import ItemsComponent from "./Componets/ItemsComponent";
import Navbar from "./Componets/Navbar";
import Home from "./Componets/Home";
import Item from "./Componets/Item";
import About from "./Componets/About";
import AboutLink from "./Componets/AboutLink";
import Contact from "./Componets/Contact";
import Footer from "./Componets/Footer";
import store from "./redux/store.js";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />

          <Route exact path="/products" element={<ItemsComponent />} />
          <Route exact path="/:id" element={<Item />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <AboutLink />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
