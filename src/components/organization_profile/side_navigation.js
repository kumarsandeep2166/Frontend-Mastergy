import React from 'react'

function SideNavbar()
{
	return(
		<div className="container-fluid collapse position-fixed organization-side-bar animate__animated animate__fadeInLeft" id="SideNavbar"> 
				<span className="fa fa-times side-bar-cross" data-toggle="collapse" data-target="#SideNavbar" aria-expanded="false" aria-controls="SideNavbar"></span>
				<div className="d-flex align-items-center side-bar-item" id="side-bar-dummy-item">
					<span className="fa fa-home organization-top-navbar-icon"></span>
					<button className="btn organization-top-navbar-button side-bar-item">Home</button>
				</div>
				<hr className="bg-success"/>
				<div className="d-flex align-items-center side-bar-item">
					<span className="fa fa-comment-dots organization-top-navbar-icon"></span>
					<button className="btn organization-top-navbar-button side-bar-item">Messages</button>
				</div>
				<hr className="bg-success"/>
				<div className="d-flex align-items-center side-bar-item">
					<span className="fa fa-bell organization-top-navbar-icon"></span>
					<button className="btn organization-top-navbar-button side-bar-item">Notficiations</button>
				</div>
				<hr className="bg-success"/>
				<div className="d-flex align-items-center side-bar-item">
					<span className="fa fa-user-circle organization-top-navbar-icon"></span>
					<button className="btn organization-top-navbar-button side-bar-item">Profile</button>
				</div>
				<hr className="bg-success"/>
				<div className="d-flex align-items-center side-bar-item">
					<span className="fa fa-plus-circle organization-top-navbar-circle text-align-center"></span>
				</div>
				<hr className="bg-success"/>
		</div>
	)
}

export default SideNavbar