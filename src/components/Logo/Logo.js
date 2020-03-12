import React from 'react';
import styles from './Logo.module.css';
import Logo from '../../assets/original.png';

const logo = () => {
	return (
		<img
			className={styles.Logo}
			src={Logo}
			alt='Logo'
		></img>
	);
};

export default logo;
