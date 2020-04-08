import React, { useContext, useState } from 'react';
import InputsContext from '../context/inputs-provider';

const Input = ({type, id}) => {
	const {state, inputHandle} = useContext(InputsContext);
	return(
		Object.values(state).map(input =>
			<label key={input.id} htmlFor={input.id}>
				<input type={input.type} name={input.id} onChange={inputHandle}/>
			</label>
		)
		
	);
}

export default Input;