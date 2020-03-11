import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './SideDrawer.module.css';
import Aux from '../../../hoc/Auxiliary';

const sideDrawer = props => {
    let classes = [ styles.SideDrawer, styles.Close ]
    if (props.open) {
        classes = [styles.SideDrawer, styles.Open]
    }
	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={classes.join(' ')}>
				<Logo />
				<nav style={{ 'margin-top': '10px' }}>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
};

export default sideDrawer;
