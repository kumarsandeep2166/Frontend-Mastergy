import React, { useEffect } from 'react';
import './feed.css';
import TopNavbar from '../organization_profile/top_navigation';
import Post from './Post';
import FeedLeftElement from './feed_left_element';
import CreateSpace from './Create_space';
import OrganizationCourses from '../organization_profile/organization_courses';
import OrganizationEvents from '../organization_profile/organization_events';
import '../organization_profile/CSS/organization_profile.css';
import { connect } from 'react-redux';
import { userFeed } from '../../State/Actions/feed';
import Loader from '../Loader/Loader';

function FeedPage({ userFeed, loading, feedsData }) {
  useEffect(() => {
    console.log('Fetching feeds');
    userFeed();
  }, [userFeed]);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <TopNavbar />
      <div class="row  feed-post-main justify-content-center">
        <div class="col-2 feed_post_left">
          <CreateSpace />
          <div class="feed_post_left-section">
            <FeedLeftElement
              name="Python"
              description="(Programming Language)"
            />
            <FeedLeftElement
              name="Python"
              description="(Programming Language)"
            />
            <FeedLeftElement
              name="Python"
              description="(Programming Language)"
            />
            <FeedLeftElement
              name="Python"
              description="(Programming Language)"
            />
          </div>
        </div>
        <div class="col-7 feed_post_center">
          <div class="feed_post_buttons">
            <button class="btn">Courses</button>
            <button class="btn">Events</button>
            <button class="btn">Statues</button>
          </div>
          {feedsData.map((data) => (
            <Post feed={data} />
          ))}
          {/* <Post />
          <Post /> */}
          <OrganizationCourses />
          <OrganizationEvents />
        </div>
        <div class="col-2 feed_post_right"></div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  feedsData: state.feed.feeds,
});

export default connect(mapStateToProps, { userFeed })(FeedPage);
