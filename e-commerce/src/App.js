import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import ItemsComponent from "./Componets/ItemsComponent";
import Navbar from "./Componets/Navbar";
import Home from "./Componets/Home";
import Item from "./Componets/Item";
import About from "./Componets/About";
import AboutLink from "./Componets/AboutLink";
import Contact from "./Componets/Contact";
import Basket from "./Componets/Basket";
import Footer from "./Componets/Footer";
import store from "./redux/store";

import "./App.css";
import SignUpForm from "./Componets/SignUpForm";

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
          {/* <Route exact path="/cart" element={<Cart />} /> */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/basket" element={<Basket />} />
          <Route exact path="/signup" element={<SignUpForm />} />
        </Routes>
        <AboutLink />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
