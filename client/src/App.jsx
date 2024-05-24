import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Blog from './pages/Blog.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Checkout from './pages/Checkout.jsx';
import About from './pages/About.jsx';
import './styling/App.css';

const App = () => {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	);
};

export default App;
