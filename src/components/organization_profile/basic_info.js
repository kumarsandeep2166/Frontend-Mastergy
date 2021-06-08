import React,{useState,useEffect} from 'react'
import ProfileButton from './profile_button'

function BasicInfo()
{
	const initialstate={
		'Attachment':''
	}
	const [Input,setInput]=useState(initialstate)
	const [Image,setImage]=useState('')
	useEffect(()=>{
		setImage(Input.Attachement)
	},[Input])
	const saveChanges=(event)=>{
		setInput({Attachment:URL.createObjectURL(event.target.files[0])})
	}
	const Reset=()=>{
		setInput('')
	}
	console.log(Image)
	return(
		<div className="container-fluid  d-flex basic-info">
			<div className="basic-info-img col-sm-3 col-5">
				<img src={Input.Attachment} alt="sandy" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target=".image-bd-example-modal-lg"/>
			</div>
			<div class="modal fade image-bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div class="modal-dialog modal-dialog-centered" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title" id="exampleModalLabel">Upload your image</h5>
			        <button type="button" onClick={Reset} class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div class="modal-body">
				  		<div class="form-group">
						  	<label>Upload Attachment</label>
						    <label for="AwardAttachment" class="custom-file-upload">
						    	<input type="file" accept="image/gif, image/jpeg, image/png" class="file-input" id="AwardAttachment"  onChange={saveChanges} name="Attachment" />
								<i class="fa fa-cloud-upload"></i>Upload
							</label>
							<img src={Input.Attachment}/>
						  </div>
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			        <button type="button"  data-dismiss="modal" class="btn btn-primary">Save changes</button>
			      </div>
			    </div>
			  </div>
			</div>
			<div className="basic-info-content">
				<h2 className="basic-info-content-name page-header">Utkal University</h2>
				<div className="basic-info-content-location d-flex">
					<span className="fa fa-map-marker"></span>
					<div>
						<h6 className="basic-info-location-name1 text-muted">Bhubaneswar,Odisha</h6>
						<h6 className="basic-info-location-name2 text-muted">E.T.D-1986</h6>
					</div>
				</div>
				<div className="basic-info-buttons d-flex">
					<ProfileButton button_name="Connect"/>
					<button className="btn basic-info-button d-xl-inline d-none btn-secondary">Follow</button>
					<button className="btn basic-info-button d-xl-inline d-none btn-secondary">Enquiry</button>
					<div className="dropdown dropdown-div">
  						<button className="btn basic-info-button dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    					More
  						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						    <a className="dropdown-item" href="#">Action</a>
						    <a className="dropdown-item" href="#">Events</a>
						    <a className="dropdown-item" href="#">Block</a>
						    <a className="dropdown-item d-lg-none d-inline" href="#">Enquiry</a>
						 </div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BasicInfo