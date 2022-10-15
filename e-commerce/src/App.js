import ItemsComponent from "./Componets/ItemsComponent";
import Footer from "./Componets/Footer";
import "./App.css";
import NavbarComponent from "./Componets/NavbarComponent";

function App() {
  return (
    <div className="App" id="home">
      {/* <NavbarComponent /> */}
      <ItemsComponent />
      <Footer />
    </div>
  );
}

export default App;
