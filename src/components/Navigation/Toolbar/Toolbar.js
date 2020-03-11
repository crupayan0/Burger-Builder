import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = props => {
	return (
		<header className={styles.Toolbar}>
            {/* <div onClick={props.ssd ? props.closeSD : props.openSD}>Menu</div> */}
            <DrawerToggle clicked={props.drawerToggleClicked}/>
			<Logo />
			<nav className={styles.DesktopOnly}>
				<NavigationItems />
			</nav>
		</header>
	);
};

export default toolbar;
