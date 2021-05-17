import React from 'react';

function FeedPost(props) {
    return (
        <div class="row justify-content-center">
        <div class="col-4 mainpost">
            <div class="postheader d-flex">
                <div class="postheaderimg">
                    <img src={require('./Images/person.jpg')} alt="person"/>
                </div>
                <div>
                    <div class="postusername">John Doe</div>
                    <div class="d-flex">
                        <div class="postuserclock">
                            <img src={require('./Images/clock.png')} alt="clock"/>
                        </div>
                        <span class="postusertime">3 min ago</span>
                    </div>
                </div>
            </div>
            <div class="posticons d-flex justify-content-between">
                <div class="posticonsfirst align-items-center d-flex">
                    <div class="d-flex align-items-start">
                        <div class="posticonsfirsticon">
                            <img src={require('./Images/icon8.png')} alt='icon'/>
                        </div>
                        <div>Epic Coder</div>
                    </div>
                    <div class="d-flex align-items-start">
                        <div class="posticonsfirsticon2">
                            <img src={require('./Images/icon9.png')} alt='icon'/>
                        </div>
                        <div>India</div>
                    </div>
                </div>
                <div class="posticonssecond align-items-center d-flex">
                    <div class="posticonsecond1">
                        <img src={require('./Images/icon8.png')} alt='icon'/>
                    </div>
                    <div class="posticonsecond2">
                        <img src={require('./Images/icon9.png')} alt='icon'/>
                    </div>
                </div>
            </div>
            <div class="workname">Senior Wordpress Developer</div>
            <div class="postapply d-flex align-items-center">
                <button>Full Time</button>
                <div class="posthours">$30/hr</div>
            </div>
            <div class="postcontent">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </div>
            <div class="postskills d-flex">
                <div>Html</div>
            </div>
            <hr/>
            <div class="postfooter">
                <div class="postfooterfirst">
                    <span class=""></span>
                    <span class=""></span>
                    <span>Comment 15</span>
                </div>
                <div class="postfootersecond">
                    <span class=""></span>
                </div>
            </div>
        </div>
        </div>
    );
}

export default FeedPost;
