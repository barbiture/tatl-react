import React, { PureComponent, useState, Fragment } from 'react';
import {InputsProvider} from '../context/inputs-provider';
import togglePopup from '../decorators/toggle-popup';
import Registration from './registration';
import View from './view';
class Main extends PureComponent {
	state = {
		email: {
			type: 'email',
			id: 'email',
			val: ''
		},
		phone: {
			type: 'tel',
			id: 'phone',
			val: ''
		},
		firstName: {
			type: 'text',
			id: 'firstName',
			val: ''
		},
		lastName: {
			type: 'text',
			id: 'lastName',
			val: ''
		}
	}
	inputHandle({target}) {
		const {name, value} = target;
		this.setState((prevState, props) => ({
			[name]: {
				...prevState[name],
				val: value
			}
		}));
	}
	render() {
		const {togglePopup, openItemId} = this.props;
		console.log('render', openItemId)
		return (
			<div className="container" id="main">
				<InputsProvider value={{state: this.state, inputHandle: this.inputHandle.bind(this)}}>
					<Registration isOpen={openItemId === 'reg'} togglePopup={togglePopup}/>
				</InputsProvider>
				<View value={this.state} isOpen={openItemId === 'detail'} togglePopup={togglePopup}/>
				<button id="detail" onClick={togglePopup}>User detail</button>
				<button id="reg" onClick={togglePopup}>Registration</button>
			</div>
		)
	}
}
export default togglePopup(Main);