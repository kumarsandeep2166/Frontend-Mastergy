import React from 'react'

function ProfileButton({button_name})
{
	return(
		<React.Fragment>
			<button className="btn basic-info-button btn-secondary">{button_name}</button>
		</React.Fragment>
	)
}

export default ProfileButton