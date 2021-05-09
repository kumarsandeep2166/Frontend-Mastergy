import React from 'react'

function Element1({element_heading,element_data})
{
	return(
		<div className="quick-info-element col-sm col-3 d-flex ">
			<span className="fa fa-info-circle  quick-info-element-icon"></span>
			<div>
				<span className="d-block Element-heading text-muted">{element_heading}</span>
				<p className="Element-data">{element_data}</p>
			</div>
		</div>
	)
}

export default Element1