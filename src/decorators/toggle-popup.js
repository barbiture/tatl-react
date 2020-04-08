import React, { useState } from 'react';

export default (OriginalComponent) => ({...props}) => {
  const [openItemId, setId] = useState(null)
  const togglePopup = (e) => {
  	e.preventDefault();
  	const {target} = e;
  	const check =  ['close', 'save'].some(i => i === target.classList.value)
  	if(check)
  		setId(check)
    setId(openItemId ===  target.id ? null : target.id)
  }

  return(
    <OriginalComponent 
      {...props}
      openItemId={openItemId}
      togglePopup={togglePopup}
    />
  );
}

