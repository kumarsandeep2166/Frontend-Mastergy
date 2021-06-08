import React from 'react';
import './feed.css'
import TopNavbar from '../organization_profile/top_navigation'
import Post from './Post'
import Feed_left_element from './feed_left_element'
import Create_space from './Create_space'
import OrganizationCourses from '../organization_profile/organization_courses'
import OrganizationEvents from '../organization_profile/organization_events'
import '../organization_profile/CSS/organization_profile.css'
function feedPage()
{
    return (
        <div>
            <TopNavbar/>
            <div class="row  feed-post-main justify-content-center">
                <div class="col-2 feed_post_left">
                    <Create_space/>
                    <div class="feed_post_left-section">
                        <Feed_left_element name="Python" description="(Programming Language)"/>
                        <Feed_left_element name="Python" description="(Programming Language)"/>
                        <Feed_left_element name="Python" description="(Programming Language)"/>
                        <Feed_left_element name="Python" description="(Programming Language)"/>
                    </div>
                </div>
                <div class="col-7 feed_post_center">
                    <div class="feed_post_buttons">
                        <button class="btn">Courses</button>
                        <button class="btn">Events</button>
                        <button class="btn">Statues</button>
                    </div>
                    <Post/>
                    <Post/>
                    <OrganizationCourses/>
                    <OrganizationEvents/>
                </div>
                <div class="col-2 feed_post_right">

                </div>
            </div>
        </div>
    );
}

export default feedPage;