import React from 'react';
const View = ({value, isOpen, togglePopup}) => {
	return(
		<section className={isOpen ? 'pop-up pop-up_show' : 'pop-up pop-up_close'}>
			<button className="close" onClick={togglePopup}></button>
			<div className="pop-up__wrapper">
				<div className="form-group">
					{Object.values(value).map(item => <p key={item.id}>{item.val}</p>)}
				</div>
			</div>
		</section>
	);
}
export default View;