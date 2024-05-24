import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className='navbar'>
			<Link to='/'>Home</Link>
			<div className='dropdown'>
				<button className='dropbtn'>Shop</button>
				<div className='dropdown-content'>
					<Link to='/shop/green'>Green</Link>
					<Link to='/shop/black'>Black</Link>
					<Link to='/shop/oolong'>Oolong</Link>
					<Link to='/shop/pu-er'>Pu'er</Link>
					<Link to='/shop/white'>White</Link>
					<Link to='/shop/tisanes'>Tisanes (Herbal)</Link>
					<Link to='/shop/teaware'>Teaware</Link>
					<Link to='/shop/pantry'>Pantry</Link>
				</div>
			</div>
			<div className='dropdown'>
				<button className='dropbtn'>Tea Corner</button>
				<div className='dropdown-content'>
					<Link to='/timeline'>The Tea Timeline</Link>
					<Link to='/blog'>Mira’s Blog</Link>
				</div>
			</div>
			<Link to='/about'>About</Link>
			<Link to='/profile'>Profile</Link>
		</nav>
	);
};

export default NavBar;
