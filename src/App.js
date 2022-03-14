//Import CSS
import "./App.css";

//Context
import { CartProvider } from "./Context/cartContext";

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

// VIEWS
import Shop from "./views/Shop/Shop";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import CartView from "./views/CartView/CartView";
import CategoryType from "./views/CategoryType/CategoryType";
import Checkout from "./components/CheckOut/CheckOut";

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
            <Route path="/category/:category" element={<CategoryType />} />
            <Route exact path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
