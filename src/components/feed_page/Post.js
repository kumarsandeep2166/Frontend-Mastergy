import React, { useState } from 'react';

function Post({ feed }) {
  const [color, setColor] = useState(false);
  const [show, setShow] = useState(false);
  const applycss = () => {
    if (color === false) setColor(true);
    else setColor(false);
  };
  const showcss = () => {
    if (show === false) setShow(true);
    else setShow(false);
  };
  return (
    <div class="post">
      <div class="post-img">
        <img
          src={
            feed.image.length > 0
              ? feed.image[0].images.substr(
                  0,
                  feed.image[0].images.indexOf('?')
                )
              : require('./Images/a.jpg')
          }
          alt="img"
        />
      </div>
      <div>
        <div class="post-heading-block d-flex justify-content-between align-content-center">
          <h1 class="post-heading">Heading</h1>
          <div class="post-icons">
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
        </div>
        <div class="tags">
          {feed.technologies.map((f) => (
            <span key={f.id}>{f.name}</span>
          ))}
          {/* <span>#cycling</span>
          <span>#bike riding</span>
          <span>#virtual sports</span> */}
        </div>
        <div class={'post-information ' + (show ? 'd-block' : 'd-none')}>
          {feed.content}
        </div>
        <div class="post-date-block">
          <i class="fa fa-calendar-o" aria-hidden="true"></i>
          <span class="post-date">
            {new Date(feed.created_at).toDateString()}
          </span>
          <span class="fa fa-map-marker post-location-icon"></span>
          <span class="post-location">Bhubaneswar</span>
        </div>
        <div class="post-icons-block">
          <i
            class={'far fa-heart ' + (color ? 'post-like' : '')}
            onClick={applycss}
          ></i>
          {feed.likes}
          <i class="far fa-share-square"></i>
          <i class="far fa-comment-alt"></i>
          <span class="post-more" onClick={showcss}>
            View More
          </span>
        </div>
        <hr></hr>
      </div>
    </div>
  );
}

export default Post;
