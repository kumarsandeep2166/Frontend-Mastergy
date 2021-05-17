import React,{useState} from 'react'

function TopNavbar()
{
	const [input,setInput]=useState('')
	return(
		<div className="organization-top-navbar d-flex fixed-top align-items-center justify-content-between">
			<div className="organization-top-navbar-logo d-flex">
				<div class="landinglogo ">
                    <img src={require('./Images/logo.png')} alt="sdf"/>
                </div>
				<div className="d-flex align-items-center">
					<input className="form-control" id="top-search" placeholder="search here" value={input} onChange={event=>setInput(event.target.value)}/>
					<span className="fa fa-search top-navbar-search"></span>
				</div>
			</div>
			<button class="d-md-none btn top-bar-menu-button" type="button" data-toggle="collapse" data-target="#SideNavbar" aria-expanded="false" aria-controls="SideNavbar">
    			<span class="fa fa-bars"></span>
  			</button>
			<div className="organization-top-navbar-buttons d-md-flex d-none">
				<div className="organization-top-navbar-items">
					<div class="orgainzation-top-navbar-icon-centeri d-flex justify-content-center">
						<span className="fa fa-plus-circle organization-top-navbar-icon-plus organization-top-navbar-circle"></span>
					</div>
				</div>
				<div className="organization-top-navbar-items">
					<div class="orgainzation-top-navbar-icon-centeri d-flex justify-content-center">
						<span className="fa fa-home organization-top-navbar-icon d-block"></span>
					</div>
					<button className="btn organization-top-navbar-button">Home</button>
				</div>
				<div className="organization-top-navbar-items">
					<div className="d-flex justify-content-center organization-top-navbar-icon-centri">
						<span className="fa fa-user-circle organization-top-navbar-icon d-block"></span>
					</div>
					<button className="btn organization-top-navbar-button">Profile</button>
				</div>
				<div className="organization-top-navbar-items">
					<div class="orgainzation-top-navbar-icon-centeri d-flex justify-content-center">
						<span className="fa fa-bell organization-top-navbar-icon d-block"></span>
					</div>
					<button className="btn organization-top-navbar-button">Notifications</button>
				</div>
				<div className="organization-top-navbar-items">
					<div class="orgainzation-top-navbar-icon-centeri d-flex justify-content-center">
						<span className="fa fa-cog organization-top-navbar-icon d-block"></span>
					</div>
					<div className="dropdown dropdown-div">
  						<button className="btn  organization-top-navbar-button dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    					Settings
  						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						    <a className="dropdown-item" href="#">Logout</a>
						 </div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopNavbar