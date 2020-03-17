import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route } from 'react-router';

const App = () => {
	return (
		<div>
			<Layout />
			<Route path='/' exact component={BurgerBuilder} />
			<Route path='/checkout' component={Checkout} />
			
		</div>
	);
};

export default App;
