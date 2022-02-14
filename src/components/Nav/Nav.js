import './Nav.css';
import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
	return (
		<nav className='Navigation'>
			<ul className='List-ul'>
				<Link to='/' className='Link'>
					Shop
				</Link>
				<Link to='/About' className='Link'>
					About
				</Link>
				<Link to='/Cart' className='Link'>
					<CartWidget />
				</Link>
			</ul>
		</nav>
	);
};

export default NavBar;
