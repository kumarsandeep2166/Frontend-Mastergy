import React,{useState,useEffect,useRef} from 'react'
import {YearPicker} from 'react-dropdown-date'

function TeachingExperience()
{
	const [experiences,setExperience]=useState([])
	const [delet,setDelete]=useState(false)
	const initialState={
		OrganizationName:'',
		Location:'',
		teaching:'',
		Subjectstaken:'',
		NatureOfEmployement:'',
		DurationTo:'',
		DurationFrom:'',
		designation:''
	}
	const [Input,setInput]=useState(initialState)
	const [key,setKey]=useState(0)
	const [change,setChange]=useState(true)
	console.log(Input,"dsfffffffffff")
	useEffect(()=>{
		const filteredItem=experiences.filter(item=>item.data.key==key)
		const ppp=filteredItem
		setInput(filteredItem)
		filteredItem.map(item=>setInput(item.data))
		console.log("filtttterrr",filteredItem)
		console.log("useeffect",Input,Input.OrganizationName,Input.Location)
	},[change])
	const handleInput=(event)=>{
		event.persist()
		setInput(Input=>({...Input,[event.target.name]:event.target.value}))
		console.log(Input)
	}
	const saveChanges=(event)=>{
		console.log("reeeenterrrr")
		event.persist()
		let check=true
		experiences.map(item=>{
			if(item.data.key==Input.key)
			{
				console.log("data found")
				item.data=Input
				check=false
			}
		})
		if(check)
		{
			setExperience([...experiences,{data:{...Input,key:Date.now()}}])
		}
		setInput(initialState)
		setDelete(false)
	}
	const editValues=(key)=>{
		setDelete(true)
		console.log("Entered")
		setKey(key)
		setChange(!change)
	}
	const Reset=(event)=>{
		event.persist()
		setInput(initialState)
		setDelete(false)
	}
	const deleteChanges=()=>{
		setDelete(false)
		var filterItems=experiences.filter(item => item.data.key!==Input.key)
		console.log("Delete")
		console.log(Input.key,filterItems)
		setExperience([...filterItems])
		setInput(initialState)
	}
	return(
		<div className="Modal-About1">
			<div className="d-flex  align-items-center justify-content-between">
				<h2 className="">Teaching Experience</h2>
				<span data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target=".teaching-experience-bd-example-modal-lg" className="icon-edit-plus" >&#43;</span>
			</div>
			{experiences.map(data=>(
					<div class="d-flex align-items-center justfiy-content-end" key={data.data.key}>
						<div class="data-container text-center">
							<img src={require('./images/graduate-cap.png')} alt="cap"/>
						</div>
						<div  class="w-100">
							{console.log(data.data.key,"entereeeee",data,Input)}
							<div class="d-flex align-items-start justify-content-between">
								<div class="modal-display-main-element"> 
									<span class="modal-display-element-heading d-block">{data.data.designation}</span>
									<span class="modal-display-element d-block">{data.data.OrganizationName}</span>
									<span class="modal-display-element-duration text-muted">{data.data.DurationFrom}-</span>
									<span class="modal-display-element-duration text-muted">{data.data.DurationTo}</span>
									<span class="modal-display-element-duration text-muted">{data.data.DurationTo?'':'Present'}</span>
									<span class="modal-display-element-location text-muted d-block">{data.data.Location}</span>
								</div>
								<span onClick={()=>editValues(data.data.key)} data-toggle="modal" data-target=".teaching-experience-bd-example-modal-lg" className="fa fa-pencil  icon-edit-start"></span>
							</div>
							<hr></hr>
						</div>
					</div>
				))}
			<div class="modal fade teaching-experience-bd-example-modal-lg"  tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
			  <div class="modal-dialog-centered modal-dialog modal-lg">
			    <div class="modal-content">
			    	<div class="modal-header">
					<h3 class="modal-title form-title">Teaching Experience</h3>
			        <button type="button" onClick={Reset} class="close" data-dismiss="modal" aria-label="Close">
			        <span aria-hidden="true">&times;</span>
			        </button>
			      	</div>
			    	<div class="modal-body">
			    		<form>
						  <div class="form-group">
						    <label for="teaching-experiencename">organization Name</label>
						    <input type="text"  class="form-control" autoComplete="off" onChange={handleInput} name="OrganizationName" value={Input.OrganizationName?Input.OrganizationName:""} placeholder="Enter organization name"/>
						  </div>
						  <div class="form-check-inline form-check d-block col-sm-3">
						  	<label for="teaching-experienceEmployementFullTime">Nature of Employement</label>
						  </div>
						  <div class="radiobuttons">
						  <div class="form-check form-check-inline d-sm-inline d-block col-sm-3">
						    <input type="radio" class="form-check-input" autoComplete="off" id="teaching-experienceEmployementFullTime" onChange={handleInput} checked={Input.NatureOfEmployement=="FullTime"} value="FullTime" name="NatureOfEmployement"/>
						    <label for="teaching-experienceemployementFullTime">Full Time</label>
						  </div>
						  <div class="form-check form-check-inline d-sm-inline d-block col-sm-3">
						    <input type="radio" class="form-check-input" autoComplete="off" id="teaching-experienceEmployementPartTime" onChange={handleInput} checked={Input.NatureOfEmployement=="visiting"} value="visiting" name="NatureOfEmployement"/>
						    <label for="teaching-experienceEmployementPartTime">visiting</label>
						  </div>
						  <div class="form-check form-check-inline d-sm-inline d-block col-sm-3">
						    <input type="radio" class="form-check-input" autoComplete="off" id="teaching-experienceEmployementContractual" onChange={handleInput} checked={Input.NatureOfEmployement=="Contractual"} value="Contractual" name="NatureOfEmployement"/>
						    <label for="teaching-experienceEmployementContractual">Contractual</label>
						  </div>
						  </div>
						  <div class="form-group">
						    <label for="teaching-experiencelocation">Location</label>
						    <input type="text" class="form-control"  autoComplete="off" id="teaching-experiencelocation" onChange={handleInput} name="Location" value={Input.Location?Input.Location:""}placeholder="Enter your location"/>
						  </div>
						  <div class="form-group">
						    <label for="teaching-experiencedesignation">Designation</label>
						    <input type="text" class="form-control" autoComplete="off"  id="teaching-experiencedesignation" onChange={handleInput} name="designation" value={Input.designation?Input.designation:""}placeholder="Enter the designation that you served"/>
						  </div>
						  <div class="form-group">
						    <label for="teaching-experienceSubjectstaken">Subjects taken</label>
						    <input type="text" class="form-control" autoComplete="off" id="teaching-experienceSubjectstaken" onChange={handleInput} name="Subjectstaken" value={Input.Subjectstaken?Input.Subjectstaken:""} placeholder="Enter the subjects that you have taught"/>
						  </div>
						  <div class="form-check-inline form-check  d-block col-sm-4">
						  	<label for="teaching-experienceteaching">Currently teaching here?</label>
						  </div>
						  <div class="radiobuttons">
						  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
						    <input type="radio" class="form-check-input" autoComplete="off" id="teaching-experienceWorkingYes" onChange={handleInput} checked={Input.teaching=="yes"} value="yes" name="teaching"/>
						    <label for="teaching-experienceWorkingYes">Yes</label>
						  </div>
						  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
						    <input type="radio" class="form-check-input" autoComplete="off"  id="teaching-experienceWorkingNo" value="no" onChange={handleInput} checked={Input.teaching=="no"} name="teaching"/>
						    <label for="teaching-experienceWorkingNo">No</label>
						  </div>
						  </div>
						  <div class="row">
							  <div class="col-5">
								<div class="form-group">
									<label for="Duration" class="d-sm-inline d-block">From</label>
									<YearPicker
									defaultValue={'Year'}
									start={2010}                
									end={2020}                  
									reverse   
									value={Input.DurationFrom}                  
									required={true}     
									onChange={(year)=>{
										setInput({...Input,'DurationFrom':year});
										console.log(year);
									}}
									name="DurationFrom"
									classes="date"
									/>
								</div>
							  </div>
							  <div class={"col-5"+(Input.teaching?(Input.teaching=='yes'?' d-none ':' d-sm-inline d-block'):' d-none ')}>
								<div class="form-group">
									<label for="orgdepartmentsss">To</label>
									<YearPicker
									defaultValue={'Year'}
									start={2010}                
									end={2020}                  
									reverse   
									value={Input.DurationTo}                  
									required={true}     
									onChange={(year)=>{
										setInput({...Input,'DurationTo':year});
										console.log(year);
									}}
									classes={"date "}
									name="DurationTo"
									/>
								</div>
							  </div>
						  </div>
						</form>
			        </div>
			        <div class="modal-footer">
						<div class="w-100 d-flex justify-content-between">
							<div>
								<button type="button" onClick={deleteChanges} class={"btn bg-yellow delete d-none"+(delet?'d-inline':'')} data-dismiss="modal">Delete</button>
							</div>
							<div>
								<button type="button" class="btn bg-yellow close-btn" data-dismiss="modal">Close</button>
								<button type="button" onClick={saveChanges} data-dismiss="modal" class="btn bg-yellow">Save changes</button>
							</div>
						</div>
			      	</div>
			    </div>
			  </div>
			</div>
		</div>
	)
}

export default TeachingExperience