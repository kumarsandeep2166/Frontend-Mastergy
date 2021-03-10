import React,{useState,useEffect} from 'react'
import {YearPicker} from 'react-dropdown-date'

function Project()
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
	const fileUpload=(event)=>{
		setInput({...Input,Attachment:event.target.files[0]})
	}
	return(
		<div className="Modal-About">
			<div className="d-flex justify-content-between align-items-center">
				<h2 className="">Projects</h2>
				<span data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target=".project-bd-example-modal-lg"className="icon-edit-plus" >&#43;</span>
			</div>
			<div class="modal fade project-bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
			  <div class="modal-dialog-centered modal-dialog modal-lg">
			    <div class="modal-content">
			    	<div class="modal-header">
			        <h3 class="modal-title form-title">Projects</h3>
			        <button type="button" class="close" onClick={Reset} data-dismiss="modal" aria-label="Close">
			        <span aria-hidden="true">&times;</span>
			        </button>
			      	</div>
			    	<div class="modal-body flow-bar">
			    		<form>
						  <div class="form-group">
						    <label for="name">Project Title</label>
						    <input type="text" class="form-control" id="name" name="ProjectTitle" placeholder="Enter Project Title"/>
						  </div>
						  <div class="form-group">
						    <label for="role">Project Role</label>
						    <input type="text" class="form-control"  id="role" name="ProjectRole" placeholder="Enter your role"/>
						  </div>
						  <div class="form-group">
						    <label for="level">Technologies Implemented</label>
						    <select class="form-control" id="level">
						      <option>nanotech</option>
						      <option>biotech</option>
                              <option>medicine</option>
						    </select>
						  </div>
						  <div class="form-group">
							  <label for="location">location</label>
							  <input type="button" class="form-control" id="location" value="fetch location"></input>
						  </div>
						  <div class="form-group">
						    <label for="organization">Organization</label>
						    <input type="text" class="form-control"  id="organization" name="OrganizationName" placeholder="Enter Organization Name"/>
						  </div>

						  <div>
						  	<label for="ProjectFullTime">Nature of Project ::</label>
						  </div>
						  <div class="radiobuttons">
							<div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
								<input type="radio" class="form-check-input" checked={true} id="ProjectFullTime" value="FullTime"/>
								<label for="ProjectFullTime">Full Time</label>
							</div>
							<div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
								<input type="radio" class="form-check-input"  id="EmployementPartTime" value="PartTime"/>
								<label for="ProjectPartTime">Part Time</label>
							</div>
							<div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
								<input type="radio" class="form-check-input"  id="EmployementContractual" value="Contractual"/>
								<label for="ProjectContractual">Contractual</label>
							</div>
						  </div>
						  <div class="form-group">
						    <label for="learning">Learning Deliverables:</label>
						    <textarea type="text" class="form-control" row={4} id="learning" name="LearningDeliverables" />
						  </div>
						  <div class="form-group">
						    <label for="SkillsLearned">SkillsLearned</label>
						    <input type="text" class="form-control"  id="SkillsLearned" name="SkillsLearned" placeholder="Enter if any skills you learned"/>
						  </div>
						  <div class="form-check-inline form-check d-block col-sm-4">
						  	<label for="ProjectOnline">Project Conducting Type</label>
						  </div>
						  <div class="radiobuttons">
							<div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
								<input type="radio" class="form-check-input" checked={true} id="ProjectOnline" value="online"/>
								<label for="ProjectOnline">Online</label>
							</div>
							<div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
								<input type="radio" class="form-check-input"  id="ProjectOffline" value="offline"/>
								<label for="ProjectOffline">Offline</label>
							</div>
						  </div>
						  <div class="form-group">
						    <label for="level">Project Developed During</label>
						    <select class="form-control" id="level">
						      <option class="p-10">Education Levels</option>
						      <option>Employement Levels</option>
						    </select>
						  </div>
						  <div class="form-group">
						  	<label>Upload Project Pic</label>
						    <label for="CertificationsAttachment" class="custom-file-upload">
						    	<input type="file" class="file-input" id="CetrificationsAttachment"  onChange={fileUpload} name="Attachment" />
								<i class="fa fa-cloud-upload"></i> Custom Upload
							</label>
						  </div>
						  <div class="form-check-inline form-check  d-block col-sm-4">
						  	<label for="issued">Status</label>
						  </div>
						  <div class="radiobuttons">
						  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
						    <input type="radio" class="form-check-input" checked={true} id="issued" value="issued"/>
						    <label for="issued">Running</label>
						  </div>
						  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
						    <input type="radio" class="form-check-input"  id="pending" value="pending"/>
						    <label for="WorkingNo">Completed</label>
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

export default Project