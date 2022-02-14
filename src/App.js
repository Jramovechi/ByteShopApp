import './App.css';

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

// VIEWS
import Shop from './views/Shop/Shop';
import About from './views/About/About';
import Cart from './views/Cart/Cart';
import Detail from './views/Detail/Detail';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Nav />
				<Routes>
					<Route path='/' element={<Shop />} />
					<Route path='/about' element={<About />} />
					<Route path='/cart' element={<Cart/>} />
					<Route path='/detail/:id' element={< Detail />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
