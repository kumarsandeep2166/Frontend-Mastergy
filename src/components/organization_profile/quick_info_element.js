import React from 'react'

function Element({element_heading,element_data})
{
	return(
		<div className="quick-info-element  d-flex">
			<span className="">{element_heading}</span>
			<p className="">{element_data}</p>
		</div>
	)
}

export default Element