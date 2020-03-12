import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSumary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.44,
	bacon: 1.3,
	meat: 2
};

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 5,
		purchasable: false,
		purchasing: false,
		loading: false
	};

	componentDidMount() {
		axios.get('/ingredients.json').then(res => {
			this.setState({ ingredients: res.data });
		});
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => sum + el, 0);
		this.setState({ purchasable: sum > 0 });
	}

	addIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		const newCount = oldCount + 1;
		const newIngredients = {
			...this.state.ingredients
		};
		newIngredients[type] = newCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({ totalPrice: newPrice, ingredients: newIngredients });
		this.updatePurchaseState(newIngredients);
	};
	removeIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const newCount = oldCount - 1;
		const newIngredients = {
			...this.state.ingredients
		};
		newIngredients[type] = newCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({ totalPrice: newPrice, ingredients: newIngredients });
		this.updatePurchaseState(newIngredients);
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		this.setState({ loading: true });
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: 'RC',
				address: {
					street: 'testStreet',
					country: 'India'
				},
				email: 'rc@rc.com'
			},
			deliveryMethod: 'fastest'
		};
		axios
			.post('/orders.json', order)
			.then(res => {
				this.setState({ loading: false, purchasing: false });
				console.log(res);
			})
			.catch(e => {
				this.setState({ loading: false, purchasing: false });
				console.log(e);
			});
		//alert('You can continue');
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		let orderSumary = null;

		let burger = <Spinner />;

		if (this.state.ingredients) {
			burger = (
				<Aux>
					<Burger ingredients={this.state.ingredients} />
					<BuildControls
						ingredientAdded={this.addIngredientHandler}
						ingredientRemoved={this.removeIngredientHandler}
						disabled={disabledInfo}
						price={this.state.totalPrice}
						purchasable={this.state.purchasable}
						ordered={this.purchaseHandler}
					/>
				</Aux>
			);
			orderSumary = (
				<OrderSummary
					price={this.state.totalPrice.toFixed(2)}
					ingredients={this.state.ingredients}
					canceled={this.purchaseCancelHandler}
					continued={this.purchaseContinueHandler}
				/>
			);
		}

		if (this.state.loading) {
			orderSumary = <Spinner />;
		}

		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHandler}
				>
					{orderSumary}
				</Modal>
				{burger}
			</Aux>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);
