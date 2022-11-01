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
import "./App.css";

/* This app has one bug, when user is on page localhost:3000/id prss the button Add 
one time it adds the item and on the basket icon appears the digit 1, but if hte user adds the same
item again the digit still will be 1, if the user will go to the basket page, there will be qty of item 2
if the user adds another item the digit updates to 2. I don't know how to fix that bug and I decided to leave it like that
because I didn't want to cheat and ask someone more experienced to help me. I used my own skills to be honest and show what can I do.
*/

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
