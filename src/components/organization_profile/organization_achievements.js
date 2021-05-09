import React,{useEffect,useState}from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'
import {YearPicker} from 'react-dropdown-date'

function Achievements()
{
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
		<div class="container mt-2 organization-achievement">
			<div class="d-flex justify-content-between align-items-center">
				<h4 className="organization-achievement-heading">Awards/Achievements</h4>
				<span data-toggle="modal" data-target=".organizationachievement-bd-example-modal-lg"className="icon-edit-plus" ><i>&#43;</i></span>
			</div>
			<div class="row" >
			{experiences.map(data=>(
							<div class="col-lg-3 col-sm-6 orgachieve" key={data.data.key}>
								<div class="card organization-achievement-card card-block">
									<img class="organization-achievement-card-img" src={data.data.Attachment} alt="Photo of sunset"/>
									<h5 class="card-title organization-achievement-card-title mt-3">{data.data.title}</h5>
									<p class="card-text text-muted organization-achievement-card-text">{data.data.description}</p>
									<hr class="organization-achievement-hr"/>
									<div class="d-flex align-items-center organization-achievement-footer">
										<div class="d-flex align-items-center click">
											<div class="organization-achievement-footer-img">
												<img src={require('./Images/admin1.png')} alt="sandy"/>
											</div>
											<div>
												<dt class="organization-achievement-footer-title">{data.data.honour}</dt>
												<dd class="organization-achievement-footer-title text-muted" >{data.data.DurationFrom} {data.data.DurationTo}</dd>
											</div>
										</div>
										<div class="organization-achievement-footer-view text-right">
											<span class="fa fa-eye text-muted"></span>
											<dd class="text-muted text-muted">5000</dd>
										</div>
									</div>
								</div>
							</div>
				))}
				</div>
			<div class="modal fade organizationachievement-bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
			  <div class="modal-dialog-centered modal-dialog modal-lg ">
			    <div class="modal-content">
			    	<div class="modal-header">
			        <h3 class="modal-title form-title">Awards/Achievements</h3>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			        <span aria-hidden="true">&times;</span>
			        </button>
			      	</div>
			    	<div class="modal-body">
			    		<form>
						  <div class="form-group">
						    <label for="orgachievementtitle">Title</label>
						    <input type="text" class="form-control"  id="orgachievementtitle"onChange={handleInput} value={Input.title} name="title" placeholder="Enter  Title"/>
						  </div>
                          <div class="form-group">
						    <label for="orgachievementlink">Link</label>
						    <input  type="text" class="form-control"  id="orgachievementlink" onChange={handleInput} value={Input.link} name="link" placeholder="Paste Your Link " />
						  </div>
                          <div class="form-group">
						    <label for="orgachievementhonour">Honoured By</label>
						    <input  type="text" class="form-control"  id="orgachievementhonour" onChange={handleInput} value={Input.honour} name="honour" placeholder="Enter  the Name of Honour" />
						  </div>
                          <div class="form-group">
						    <label for="orgachievementdescription">Description</label>
						    <textarea row={3} type="text" class="form-control"  id="orgachievementdescription" name="description" onChange={handleInput} value={Input.description} placeholder="Enter Few lines About Your Achievement" />
						  </div>
						  <div class="form-group">
						  	<label>Upload Attachment</label>
						    <label for="AwardAttachment" class="custom-file-upload">
						    	<input type="file" accept="image/gif, image/jpeg, image/png" class="file-input" id="AwardAttachment"  onChange={fileUpload} name="Attachment" />
								<i class="fa fa-cloud-upload"></i>Upload
							</label>
							<img src={Input.Attachment}/>
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
							  <div class="col-5">
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
									classes="date"
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
export default Achievements