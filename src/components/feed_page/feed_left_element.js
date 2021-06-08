import React from 'react';

function Feed_left_element({name,description}) {
    return (
        <div class="feed-left-element d-flex">
            <div class="feed-left-element-img">
                <img src={require('./Images/a.jpg')} alt="img"/>
            </div>
            <div>
                <span class="feed-left-element-name d-block">{name}</span>
                <p class="feed-left-element-description">{description}</p>
            </div>
        </div>
    );
}

export default Feed_left_element;