import React,{useRef,useState,useEffect} from 'react'
import {YearPicker} from 'react-dropdown-date'
import DepartmentElement from './department_element'

function Clubs()
{  	const inputRef=useRef(null)
	const [toggle,setToggle]=useState(true)
	const ChangeName=()=>{
		if(toggle)
		{
			inputRef.current.innerHTML="See Less"
		}
		else{
			inputRef.current.innerHTML="See All"
		}
		setToggle(!toggle)
	}
	const [experiences,setExperience]=useState([])
	const [delet,setDelete]=useState(false)
	const initialState={
		title:'',
		link:'',
		honour:'',
		description:'',
		Attachment:'',
		DurationTo:'',
		DurationFrom:'',
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
		setInput({...Input,Attachment:URL.createObjectURL(event.target.files[0])})
	}
	return(
		<div className="Modal-About">
			<div className="d-flex justify-content-between align-items-center">
				<h2 className="">Clubs</h2>
				<span data-toggle="modal" data-target=".organizationclubs-bd-example-modal-lg" data-backdrop="static" data-keyboard="false" className="icon-edit-plus" >&#43;</span>
			</div>
			<div className="department-elements">
				<div className="row">
				{experiences.map(data=>(
					<DepartmentElement dept_name={data.data.name} dept_image={data.data.Attachment} dept_members="500" key={data.data.key}/>
				))}
				</div>
			</div>
			<hr/>
			<button ref={inputRef} onClick={ChangeName} className="btn btn-block department-button" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
			See all</button>
			<div class="modal fade organizationclubs-bd-example-modal-lg " tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
			  <div class="modal-dialog-centered modal-dialog modal-lg ">
			    <div class="modal-content">
			    	<div class="modal-header">
			        <h3 class="modal-title form-title">Clubs</h3>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			        <span aria-hidden="true">&times;</span>
			        </button>
			      	</div>
			    	<div class="modal-body">
			    		<form>
						<div class="form-group">
						    <label for="orgclubname">Name</label>
						    <input type="text" class="form-control"  id="orgclubname"onChange={handleInput} value={Input.name} name="name" placeholder="Enter  Name of The Club"/>
						  </div>
                          <div class="form-group">
						    <label for="orgclubhod">H.O.D</label>
							<input  type="text" class="form-control"  id="orgclubhod" onChange={handleInput} value={Input.email} name="email" placeholder="Enter Name of H.O.D"/>
						  </div>
                          <div class="form-group">
						    <label for="orgclubdescription">About</label>
						    <textarea row={5} type="text" class="form-control"  id="orgclubdescription" name="description" onChange={handleInput} value={Input.description} placeholder="Enter Few lines About Club" />
						  </div>
						  <div class="form-group">
                            <label>Profile Pic</label>
						    <label for="clubAttachment" class="custom-file-upload">
						    	<input type="file" accept="image/gif, image/jpeg, image/png" class="file-input" id="clubAttachment"  onChange={fileUpload} name="Attachment" />
								<i class="fa fa-cloud-upload"></i> Choose File
							</label>
							<img src={Input.Attachment}/>
						  </div>
						  <div class="row">
							  <div class="col-6">
                          <div class="form-group">
						    <label for="Duration" class="d-sm-inline d-block">Establishment Year</label>
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

export default Clubs