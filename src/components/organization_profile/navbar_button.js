import React from 'react'

function Navbar_Button({button_name})
{
	return(
		<React.Fragment>
			<button className="btn navbar-btn">{button_name}</button>
		</React.Fragment>
	)
}

export default Navbar_Button