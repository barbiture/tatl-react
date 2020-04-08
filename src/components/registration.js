import React, {PureComponent} from 'react';
import Input from './input.js';
const Registation = ({isOpen, togglePopup}) => {
	console.log('isOpen', isOpen)
	return(
		<section className={isOpen ? 'pop-up pop-up_show' : 'pop-up pop-up_close'}>
			<button className="close" onClick={togglePopup}></button>
			<form action="" noValidate className="pop-up__wrapper">
				<div className="form-group">
					<Input />
				</div>
				<button type="submit" className="save" onClick={togglePopup}>Save</button>
			</form>
		</section>
	)
}
export default Registation;