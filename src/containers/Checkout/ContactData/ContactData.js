import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';

export class ContactData extends Component {
	state = {
		name: '',
		email: '',
		phone: ''
	};

	render() {
		return (
			<div className={styles.ContactData}>
				<h4>Enter your contact details</h4>
				<input type='text' className={styles.Input} placeholder='Your Name' />
				<input
					type='email'
					className={styles.Input}
					placeholder='Your Mail ID'
				/>
				<input
					type='number'
					className={styles.Input}
					placeholder='Your Phone No.'
				/>
				<Button btnType='Success' className={styles.Input}>
					CONTINUE
				</Button>
			</div>
		);
	}
}

export default ContactData;
