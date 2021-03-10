import React from 'react'
import Element from './quick_info_element'
import Element1 from './quick-info-element1'
function QuickInfo()
{
	return(
		<div className="container-fluid  quick-info " id="quick-info">
			<h4 className="quick-info-main">Quick Info</h4>
			<div className="row">
				<Element element_heading="Ranked in MBA" element_data="1st"/>
				<Element element_heading="Type of institution" element_data="Institute of National Importance"/>
				<Element element_heading="Ownership" element_data="Public Government"/>
				<Element element_heading="Genders Accepted" element_data="Co_Ed"/>
				<Element element_heading="Affiliation" element_data="UGC,AICTE"/>
			</div>
			<div className="row">
				<Element1 element_heading="ESTD Year" element_data="1961"/>
				<Element1 element_heading="Total Area" element_data="100 acre" />
				<Element1 element_heading="Total Faculty" element_data="96" />
				<Element1 element_heading="Total Students" element_data="1008" />
				<Element1 element_heading="Languages Spoken" element_data="English,Oriya,Hindi"/>
				<Element1 element_heading="AVG LPA" element_data="10 L"/>
				<Element1 element_heading="WEBSITE LINK" element_data="www.iima.ac.in"/>
			</div>
		</div>
	)
}

export default QuickInfo