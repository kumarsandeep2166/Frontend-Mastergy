import React from 'react'
import Element from './quick_info_element'
import Element1 from './quick-info-element1'
function QuickInfo()
{
	return(
		<div className="Modal-About">
			<div className="d-flex justify-content-between align-items-center">
				<h2 className="">Quick Info</h2>
			</div>
			<div className="quick-info-dummy">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			</div>
			<table class="quick-info-table" id="customers">
				<tr class="quick-info-tr">
					<th>Ranked in MBA</th>
					<td>1st</td> 
					<th>Type of Institute</th>
					<td>Institute of National Importance</td>
				</tr>
				<tr>
					<th>Ownership</th>
					<td>Public/Government</td> 
					<th>Genders Accepted</th>
					<td>Co-Ed</td>
				</tr>
				<tr>
					<th>Affilliation</th>
					<td>UGC,AICTE</td> 
					<th>ESTD Year</th>
					<td>1961</td>
				</tr>
				<tr>
					<th>Total Area</th>
					<td>100 acre</td> 
					<th>Total Faculty</th>
					<td>96</td>
				</tr>
				<tr>
					<th>Total Student Enrollments</th>
					<td>1008</td> 
					<th>Languages Spoken</th>
					<td>English,Oriya,Hindi</td>
				</tr>
				<tr>
					<th>Avg LPA</th>
					<td>10 L</td> 
					<th>WEBSITE LINK</th>
					<td>www.llma.ac.in</td>
				</tr>
			</table>
			<div class="space"></div>
		</div>
	)
}

export default QuickInfo