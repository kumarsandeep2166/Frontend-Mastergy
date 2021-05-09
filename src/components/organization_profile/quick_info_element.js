import React from 'react'

function Element({element_heading,element_data})
{
	return(
		<div className="quick-info-element col-sm-3 col-6 d-flex">
			<span className="fa fa-tag quick-info-element-icon"></span>
			<div>
				<span className="d-block text-muted Element-heading">{element_heading}</span>
				<p className="Element-data">{element_data}</p>
			</div>
		</div>
	)
}

export default Element