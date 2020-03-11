import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSumary extends Component {
	componentDidUpdate() {
		console.log('UPdate');
	}

	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
			return (
				<li key={igKey}>
					<span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
					{this.props.ingredients[igKey]}
				</li>
			);
		});
		return (
			<Aux>
				<h3>Your Orders</h3>
				<p>A delicious burger with the following ingredients:</p>
				<ul>{ingredientSummary}</ul>
				<p>
					<strong>Total Price: ${this.props.price}</strong>
				</p>
				<p>Continue to Checkout?</p>
				<Button btnType='Danger' clicked={this.props.canceled}>
					CANCEL
				</Button>
				<Button btnType='Success' clicked={this.props.continued}>
					CONTINUE
				</Button>
			</Aux>
		);
	}
}

export default OrderSumary;
