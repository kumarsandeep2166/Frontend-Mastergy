import React from 'react';
import './network.css'
import Usercomponent from './user_component'

function Networkpage() {
    return (
        <div class="row">
            <div class="col-3"></div>
		    <div class="col-7">
                <div class="">
                <Usercomponent/>
                <Usercomponent/>
                <Usercomponent/>
                </div>
		    </div>
		    <div class="col-2"></div>
        </div>
    )
}

export default Networkpage;