import React from 'react'
import './CSS/organization_profile.css'
import Header from './header'
import Navbar from './organization_navbar'
import OrganizationAbout from './organization_about'
import Department from './organization_department'
import QuickInfo from './quick_info'
import TopNavbar from './top_navigation'
import SideNavbar from './side_navigation'
import Achievements from './organization_achievements'
import Profile from './profile_details'
import Clubs from './organization_clubs'
function OrganizationProfile()
{
	return(
		<React.Fragment>
			<TopNavbar/>
			<SideNavbar/>
			<div className="row">
				<div className="col-md-2">
				</div>
				<div className="col-md-8 organization-body">
					<Header/>
					<QuickInfo/>

					<Navbar/>
					<Profile/>
					<OrganizationAbout/>
					<Achievements/>
					<Department/>
					<Clubs/>
				</div>
				<div className="col-md-2">
				</div>
			</div>
		</React.Fragment>
	)
}

export default OrganizationProfile