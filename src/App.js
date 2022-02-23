//Import CSS
import "./App.css";

//Context
import { CartProvider } from "./Context/cartContext";

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

//FireBase - FireStore
import { db } from "./firebase/firebaseConfig";

// VIEWS
import Shop from "./views/Shop/Shop";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import CartView from "./views/CartView/CartView";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
