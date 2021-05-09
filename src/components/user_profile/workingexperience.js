import React,{useState,useEffect} from 'react'
import {YearPicker} from 'react-dropdown-date'

function WorkingExperience()
{
	const [experiences,setExperience]=useState([])
	const [delet,setDelete]=useState(false)
	const initialState={
		OrganizationName:'',
		Location:'',
		JobDescription:'',
		SkillsLearned:'',
		NatureOfEmployement:'',
		DurationTo:'',
		DurationFrom:'',
		designation:'',
		working:''
	}
	const [Input,setInput]=useState(initialState)
	console.log("starting",Input)
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
			<div className="d-flex justify-content-between align-items-center">
				<h2 className="">Working Experience</h2>
				<span data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target=".working-experience-bd-example-modal-lg"className="icon-edit-plus" >&#43;</span>
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
									<p class="modal-display-element-description">{data.data.JobDescription}</p>
								</div>
								<span onClick={()=>editValues(data.data.key)} data-toggle="modal" data-target=".working-experience-bd-example-modal-lg" className="fa fa-pencil  icon-edit-start"></span>
							</div>
							<hr></hr>
						</div>
					</div>
				))}
			<div class="modal fade working-experience-bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
			  <div class="modal-dialog-centered modal-dialog modal-lg">
			    <div class="modal-content">
			    	<div class="modal-header">
			        <h3 class="modal-title form-title">Working Experience</h3>
			        <button type="button" class="close" onClick={Reset} data-dismiss="modal" aria-label="Close">
			        <span aria-hidden="true">&times;</span>
			        </button>
			      	</div>
			    	<div class="modal-body flow-bar">
			    		<form>
						  <div class="form-group">
						    <label for="Workingexperiencename">organization Name</label>
						    <input type="text" class="form-control" id="Workingexperiencename" name="OrganizationName" onChange={handleInput} value={Input.OrganizationName} placeholder="Enter organization name"/>
							{console.log("OOOOOOOOOOOOOOOOOOOOOOOOOO",Input.OrganizationName,Input.Location)}
						  </div>
						 
						  <div>
						  	<label for="WorkingexperienceEmployementFullTime">Nature of Employement::</label>
						  </div>
						  <div class="radiobuttons">
						  <div class="form-check form-check-inline d-sm-inline d-block col-sm-3">
						    <input type="radio" class="form-check-input"  id="WorkingexperienceEmployementFullTime" onChange={handleInput} checked={Input.NatureOfEmployement=="FullTime"} value="FullTime" name="NatureOfEmployement"/>
						    <label for="WorkingexperienceEmployementFullTime">Full Time</label>
						  </div>
						  <div class="form-check form-check-inline d-sm-inline d-block col-sm-3">
						    <input type="radio" class="form-check-input"  id="WorkingexperienceEmployementPartTime"onChange={handleInput} value="PartTime" checked={Input.NatureOfEmployement=="PartTime"}name="NatureOfEmployement"/>
						    <label for="WorkingexperienceEmployementPartTime">Part Time</label>
						  </div>
						  <div class="form-check form-check-inline d-sm-inline d-block col-sm-3">
						    <input type="radio" class="form-check-input"  id="WorkingexperienceEmployementContractual"onChange={handleInput} value="Contractual" checked={Input.NatureOfEmployement=="Contractual"} name="NatureOfEmployement"/>
						    <label for="WorkingexperienceEmployementContractual">Contractual</label>
						  </div>
						  </div>
						  <div class="form-group">
						    <label for="Workingexperiencelocation">Location</label>
						    <input type="text" class="form-control"  id="Workingexperiencelocation" name="Location"onChange={handleInput} value={Input.Location} placeholder="Enter your location" />
						  </div>
						  <div class="form-group">
						    <label for="Workingexperiencedesignation">Designation</label>
						    <input type="text" class="form-control"  id="Workingexperiencedesignation" name="designation" onChange={handleInput} value={Input.designation} placeholder="Enter your designation"/>
						  </div>
						  <div class="form-group">
						    <label for="WorkingexperienceJobDescription">Job description</label>
						    <textarea type="text" class="form-control" row={3} id="WorkingexperienceJobDescription"onChange={handleInput} value={Input.JobDescription} name="JobDescription" placeholder="Enter job Profile"/>
						  </div>
						  <div class="form-group">
						    <label for="WorkingexperienceSkillsLearned">SkillsLearned</label>
						    <input type="text" class="form-control"  id="WorkingexperienceSkillsLearned" name="SkillsLearned" onChange={handleInput} value={Input.SkillsLearned} placeholder="Enter if any skills you learned"/>
						  </div>
						  <div class="form-check-inline form-check d-block col-sm-4">
						  	<label for="WorkingexperienceEmployementFullTime">Currently Working here?</label>
						  </div>
						  <div class="radiobuttons">
						  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
						    <input type="radio" class="form-check-input"  id="WorkingexperienceWorkingYes" name="working" onChange={handleInput}checked={Input.working=="yes"} value="yes"/>
						    <label for="WorkingexperienceWorkingYes">Yes</label>
						  </div>
						  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
						    <input type="radio" class="form-check-input"  id="WorkingexperienceWorkingNo" name="working"onChange={handleInput} checked={Input.working=="no"} value="no"/>
						    <label for="WorkingexperienceWorkingNo">No</label>
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
							  <div class={"col-5"+(Input.working?(Input.working=='yes'?' d-none ':' d-sm-inline d-block'):' d-none ')}>
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
								<button type="button" class="btn  bg-yellow close-btn" data-dismiss="modal">Close</button>
								<button type="button" onClick={saveChanges} data-dismiss="modal" class="btn bg-yellow">Save</button>
							</div>
						</div>
			      	</div>
			    </div>
			  </div>
			</div>
		</div>
	)
}

export default WorkingExperience