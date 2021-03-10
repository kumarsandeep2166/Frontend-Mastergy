import React,{useContext} from 'react'
import {datacontext} from '../../App.js'

function Dummy() 
{
	const {sandy,mandy}=useContext(datacontext)
	{console.log(sandy,"sandeep")}
	      	<datacontext.Provider value={{sandy:1,mandy:2}}>
      		<Dummy/>
        </datacontext.Provider>
	return(
		<div>
			<h1>sandeep</h1>
			{sandy}
		</div>
	)
}

export default Dummy
