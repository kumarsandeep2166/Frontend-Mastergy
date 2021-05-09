import React from 'react'

function Navbar()
{
	return(
		<div className="row organization-navbar">
			<button className="btn navbar-btn">Profile</button>
			<button className="btn navbar-btn">Articles</button>
			<button className="btn navbar-btn">Events</button>
			<button className="btn navbar-btn d-lg-inline d-none">Workshops</button>
			<button className="btn navbar-btn d-lg-inline d-none">Scholarships</button>
			<button className="btn navbar-btn d-lg-inline d-none">Exams</button>
			<button className="btn navbar-btn d-xl-inline d-none">Jobs/Internships </button>
			<div className="dropdown dropdown-div d-lg-none d-inline">
  				<button className="btn navbar-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    				More
  				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">Scholarships</a>
					<a className="dropdown-item" href="#">Exams</a>
					<a className="dropdown-item" href="#">Jobs/Internships</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar