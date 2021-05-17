import React from 'react';
function Usercomponent() {
    return (
        <div class="card network-card">

            <div class="network-backimg">
                <img  src={require('./Images/download.png')} alt="Card image cap"></img>
            </div>
            <div class="d-flex justify-content-center align-items-center network-close">
                <svg height="15" width="15" class="network-close-icon mx-auto">
                    <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                </svg>
            </div>
            <div class="network-frontimg">
                <img  src={require('./Images/download.jpg')} alt="Card image cap" alt="user"></img>
            </div>
            <div class="network-space"></div>
            <span class="network-name d-block text-center">Venkateswarlu Vajrala</span>
            <span class="network-college text-center">Student at RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES, NUZVID</span>
            <span class="network-connections d-flex">
                <svg height="30" width="30" class=" network-connections-icon">
                    <path d="M11 3a5 5 0 00-3 1 5 5 0 100 8 5 5 0 103-9zM2 8a3 3 0 014.68-2.48 4.87 4.87 0 000 5A3 3 0 015 11a3 3 0 01-3-3zm9 3a3 3 0 01-1.68-.52 4.87 4.87 0 000-5A3 3 0 1111 11z"></path>
                </svg>
                18 Mutal connections
            </span>
            <button class="btn network-btn">Connect</button>
        </div>
    )
}

export default Usercomponent;