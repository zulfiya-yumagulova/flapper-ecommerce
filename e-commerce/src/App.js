import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import ItemsComponent from "./Componets/ItemsComponent";
import Navbar from "./Componets/Navbar";
import Home from "./Componets/Home";
import Item from "./Componets/Item";
import Basket from "./Componets/Basket";
import SignUpForm from "./Componets/SignUpForm";
import Footer from "./Componets/Footer";
import store from "./redux/store";
// import "./App.css";

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
          <Route exact path="/basket" element={<Basket />} />
          <Route exact path="/signup" element={<SignUpForm />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
