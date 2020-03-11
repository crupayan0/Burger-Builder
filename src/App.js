import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

const App = () => {
	return (
		<div>
			<Layout />
			<BurgerBuilder />
		</div>
	);
}

export default App;
