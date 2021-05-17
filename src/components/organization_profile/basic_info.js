import React from 'react'
import ProfileButton from './profile_button'

function BasicInfo()
{
	return(
		<div className="container-fluid  d-flex basic-info">
			<div className="basic-info-img col-sm-3 col-5">
				<img src={require('./Images/organization.png')} alt="sandy"/>
			</div>
			<div className="basic-info-content">
				<h2 className="basic-info-content-name page-header">Utkal University</h2>
				<div className="basic-info-content-location d-flex">
					<span className="fa fa-map-marker"></span>
					<div>
						<h6 className="basic-info-location-name1 text-muted">Bhubaneswar,Odisha</h6>
						<h6 className="basic-info-location-name2 text-muted">E.T.D-1986</h6>
					</div>
				</div>
				<div className="basic-info-buttons d-flex">
					<ProfileButton button_name="Connect"/>
					<button className="btn basic-info-button d-xl-inline d-none btn-secondary">Follow</button>
					<button className="btn basic-info-button d-xl-inline d-none btn-secondary">Enquiry</button>
					<div className="dropdown dropdown-div">
  						<button className="btn basic-info-button dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    					More
  						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						    <a className="dropdown-item" href="#">Action</a>
						    <a className="dropdown-item" href="#">Events</a>
						    <a className="dropdown-item" href="#">Block</a>
						    <a className="dropdown-item d-lg-none d-inline" href="#">Enquiry</a>
						 </div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BasicInfo