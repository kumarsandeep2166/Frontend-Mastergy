import React,{useState} from 'react'

function TopNavbar()
{
	const [input,setInput]=useState('')
	return(
		<div className="organization-top-navbar d-flex fixed-top align-items-center justify-content-between">
			<div className="organization-top-navbar-logo d-flex">
				<h3>Logo</h3>
				<div className="d-flex align-items-center">
					<input className="form-contro" id="top-search" placeholder="search here" value={input} onChange={event=>setInput(event.target.value)}/>
					<span className="fa fa-search top-navbar-search"></span>
				</div>
			</div>
			<button class="d-md-none btn top-bar-menu-button" type="button" data-toggle="collapse" data-target="#SideNavbar" aria-expanded="false" aria-controls="SideNavbar">
    			<span class="fa fa-bars"></span>
  			</button>
			<div className="organization-top-navbar-buttons d-md-flex d-none">
				<div className="d-flex align-items-center">
					<span className="fa fa-home organization-top-navbar-icon"></span>
					<button className="btn organization-top-navbar-button">Home</button>
				</div>
				<div className="d-flex align-items-center">
					<span className="fa fa-comment-dots organization-top-navbar-icon"></span>
					<button className="btn organization-top-navbar-button">Messages</button>
				</div>
				<div className="d-flex align-items-center">
					<span className="fa fa-user-circle organization-top-navbar-icon"></span>
					<button className="btn organization-top-navbar-button">Profile</button>
				</div>
				<div className="d-flex align-items-center">
					<span className="fa fa-bell organization-top-navbar-icon"></span>
					<button className="btn organization-top-navbar-button">Notficiations</button>
				</div>
				<div className="d-flex align-items-center">
					<span className="fa fa-plus-circle organization-top-navbar-circle"></span>
				</div>
			</div>
		</div>
	)
}

export default TopNavbar