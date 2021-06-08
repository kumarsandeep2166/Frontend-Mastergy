<<<<<<< HEAD
import React from 'react'

function DepartmentElement({dept_name,dept_image,dept_members,})
{
	return(
		<div className="col-sm-6 d-flex department-element">
			<div className="department-element-img">
				<img src={dept_image} alt="sandy"/>
			</div>
			<div className="department-element-content">
				<span className="department-element-content-name">{dept_name}</span>
				<dd className="department-element-content-members text-muted">{dept_members} Members</dd>
			</div>
			<hr/>
		</div>
	)
}

export default DepartmentElement
=======
import React from "react";

function DepartmentElement({ dept_name, short_title }) {
  return (
    <div className="col-sm-6 d-flex department-element">
      {/* <div className="department-element-img">
				<img src={dept_image} alt="sandy"/>
			</div> */}
      <div className="department-element-content">
        <span className="department-element-content-name">{dept_name}</span>
        <dd className="department-element-content-members text-muted">
          {short_title}
        </dd>
      </div>
      <hr />
    </div>
  );
}

export default DepartmentElement;
>>>>>>> 0af7ab246a2940bf5876b5a1b3de97c69d2d3b09
