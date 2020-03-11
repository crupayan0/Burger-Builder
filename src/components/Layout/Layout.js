import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class layout extends Component {
	state = {
		showSideDrawer: false
	};
	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};
	// sideDrawerOpenHandler = () => {
	// 	this.setState({ showSideDrawer: true });
	// };
	sideDrawerToggleHandler = () => {
		this.setState(prevState => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

	render() {
		return (
			<Aux>
				<Toolbar
					drawerToggleClicked={this.sideDrawerToggleHandler}
					// openSD={this.sideDrawerOpenHandler}
					// closeSD={this.sideDrawerClosedHandler}
					// ssd={this.state.showSideDrawer}
				/>
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler}
				/>
				<main className={styles.Content}>{this.props.children}</main>
			</Aux>
		);
	}
}
export default layout;
