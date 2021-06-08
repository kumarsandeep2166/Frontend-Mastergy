<<<<<<< HEAD
import React,{useState,useEffect} from 'react'
import {YearPicker} from 'react-dropdown-date'

function Journals()
{
	const [experiences,setExperience]=useState([])
	const [delet,setDelete]=useState(false)
	const initialState={
		title:'',
		link:'',
		description:'',
		given:'',
		implemented:'',
		DurationTo:'',
		Attachement:''

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
	const fileUpload=(event)=>{
		setInput({...Input,Attachment:event.target.files[0]})
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
		<div className="Modal-About">
			<div className="d-flex  justify-content-between align-items-center">
				<h2 className="">White Paper/Journals</h2>
				<span data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target=".journals-bd-example-modal-lg"className="icon-edit-plus" >&#43;</span>
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
									<span class="modal-display-element-heading d-block">{data.data.title}</span>
									<a href="data.data.link" class="modal-display-element d-block">{data.data.link}</a>
									<span class="modal-display-element-duration text-muted">{data.data.given==="issued"?'Date of issued -':''}{data.data.DurationTo}</span>
									<span class="modal-display-element-description  d-block">{data.data.description}</span>
								</div>
								<span onClick={()=>editValues(data.data.key)} data-toggle="modal" data-target=".journals-bd-example-modal-lg" className="fa fa-pencil  icon-edit-start"></span>
							</div>
							<hr></hr>
						</div>
					</div>
				))}
			<div class="modal fade yyy journals-bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
			  <div class="modal-dialog-centered yyy modal-dialog modal-lg">
			    <div class="modal-content yyy">
			    	<div class="modal-header">
			        <h3 class="modal-title form-title">White Paper/Journals</h3>
			        <button type="button" class="close" onClick={Reset} data-dismiss="modal" aria-label="Close">
			        <span aria-hidden="true">&times;</span>
			        </button>
			      	</div>
			    	<div class="modal-body">
			    		<form>
						  <div class="form-group">
						    <label for="Journalsname">Title:</label>
						    <input type="text" class="form-control" id="Journalsname" onChange={handleInput} name="title" value={Input.name} placeholder="Enter the title of award"/>
						  </div>
						  <div class="form-group">
						    <label for="Journalslink">Link:</label>
						    <input type="text" class="form-control"  id="Journalslink"onChange={handleInput} value={Input.link} name="link" placeholder="Paste your link"/>
						  </div>
                          <div class="form-group">
						    <label for="Journalsfilling">Technologies Implemented</label>
						    <input  type="text" class="form-control" value={Input.implemented}onChange={handleInput} id="Journalsfilling" name="implemented" />
						  </div>
						  <div class="form-group">
						    <label for="Journalsdescription">Description</label>
						    <textarea type="text" class="form-control" value={Input.description}onChange={handleInput} id="Journalsdescription" name="description" rows={3}/>
						  </div>
						  <div class="form-check-inline form-check  d-block col-sm-4">
						  	<label for="Journalsissued">Status</label>
						  </div>
						  <div class="radiobuttons">
						  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
						    <input type="radio" class="form-check-input" name="given"onChange={handleInput} checked={Input.given=="issued"} id="Journalsissued" value="issued"/>
						    <label for="Journalsissued">issued</label>
						  </div>
						  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
						    <input type="radio" class="form-check-input" name="given" onChange={handleInput}id="Journalspending" checked={Input.given=="pending"} value="pending"/>
						    <label for="JournalsWorkingNo">pending</label>
						  </div>
						  </div>
						  <div class="form-group">
						    <label for="JournalsDuration" class={(Input.given?(Input.given=='pending'?' d-none ':' d-sm-inline d-block'):' d-none ')}>Date of issue</label>
							<YearPicker
								defaultValue={'select year'}
								start={2010}                
								end={2020}                  
								reverse   
								value={Input.DurationTo}                  
								required={true}     
								onChange={(year)=>{
									setInput({...Input,'DurationTo':year});
									console.log(year);
								}}
								classes={"date "+(Input.given?(Input.given=='pending'?' d-none ':' d-sm-inline d-block'):' d-none ')}
								name="DurationTo"
							/>
						  </div>
						  <div class="d-flex align-items-center row upload-input-total">
							  <div class="col-3">
							  	<label>Upload Course Pic</label>
								<label for="AwardAttachment" class="custom-file-upload">
									<input type="file" class="upload-input file-input upload-input" id="journalAttachement"  onChange={fileUpload} name="Attachment" />
									<i class="fa fa-cloud-upload"></i>Upload
								</label>
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

export default Journals
=======
import React, { useState, useEffect } from "react";
import { YearPicker } from "react-dropdown-date";

function Journals() {
  const [experiences, setExperience] = useState([]);
  const [delet, setDelete] = useState(false);
  const initialState = {
    title: "",
    link: "",
    description: "",
    given: "",
    implemented: "",
    DurationTo: "",
    Attachement: "",
  };
  const [Input, setInput] = useState(initialState);
  const [key, setKey] = useState(0);
  const [change, setChange] = useState(true);
  console.log(Input, "dsfffffffffff");
  useEffect(() => {
    const filteredItem = experiences.filter((item) => item.data.key == key);
    const ppp = filteredItem;
    setInput(filteredItem);
    filteredItem.map((item) => setInput(item.data));
    console.log("filtttterrr", filteredItem);
    console.log("useeffect", Input, Input.OrganizationName, Input.Location);
  }, [change]);
  const handleInput = (event) => {
    event.persist();
    setInput((Input) => ({
      ...Input,
      [event.target.name]: event.target.value,
    }));
    console.log(Input);
  };
  const fileUpload = (event) => {
    setInput({ ...Input, Attachment: event.target.files[0] });
  };
  const saveChanges = (event) => {
    console.log("reeeenterrrr");
    event.persist();
    let check = true;
    experiences.map((item) => {
      if (item.data.key == Input.key) {
        console.log("data found");
        item.data = Input;
        check = false;
      }
    });
    if (check) {
      setExperience([...experiences, { data: { ...Input, key: Date.now() } }]);
    }
    setInput(initialState);
    setDelete(false);
  };
  const editValues = (key) => {
    setDelete(true);
    console.log("Entered");
    setKey(key);
    setChange(!change);
  };
  const Reset = (event) => {
    event.persist();
    setInput(initialState);
    setDelete(false);
  };
  const deleteChanges = () => {
    setDelete(false);
    var filterItems = experiences.filter((item) => item.data.key !== Input.key);
    console.log("Delete");
    console.log(Input.key, filterItems);
    setExperience([...filterItems]);
    setInput(initialState);
  };
  return (
    <div className="Modal-About">
      <div className="d-flex  justify-content-between align-items-center">
        <h2 className="">White Paper/Journals</h2>
        <span
          data-toggle="modal"
          data-backdrop="static"
          data-keyboard="false"
          data-target=".journals-bd-example-modal-lg"
          className="icon-edit-plus"
        >
          &#43;
        </span>
      </div>
      {experiences.map((data) => (
        <div
          class="d-flex align-items-center justfiy-content-end"
          key={data.data.key}
        >
          <div class="data-container text-center">
            <img src={require("./images/graduate-cap.png")} alt="cap" />
          </div>
          <div class="w-100">
            {console.log(data.data.key, "entereeeee", data, Input)}
            <div class="d-flex align-items-start justify-content-between">
              <div class="modal-display-main-element">
                <span class="modal-display-element-heading d-block">
                  {data.data.title}
                </span>
                <a href="data.data.link" class="modal-display-element d-block">
                  {data.data.link}
                </a>
                <span class="modal-display-element-duration text-muted">
                  {data.data.given === "issued" ? "Date of issued -" : ""}
                  {data.data.DurationTo}
                </span>
                <span class="modal-display-element-description  d-block">
                  {data.data.description}
                </span>
              </div>
              <span
                onClick={() => editValues(data.data.key)}
                data-toggle="modal"
                data-target=".journals-bd-example-modal-lg"
                className="fa fa-pencil  icon-edit-start"
              ></span>
            </div>
            <hr></hr>
          </div>
        </div>
      ))}
      <div
        class="modal fade yyy journals-bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myExtraLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog-centered yyy modal-dialog modal-lg">
          <div class="modal-content yyy">
            <div class="modal-header">
              <h3 class="modal-title form-title">White Paper/Journals</h3>
              <button
                type="button"
                class="close"
                onClick={Reset}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="Journalsname">Title:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Journalsname"
                    onChange={handleInput}
                    name="title"
                    value={Input.name}
                    placeholder="Enter the title of award"
                  />
                </div>
                <div class="form-group">
                  <label for="Journalslink">Link:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Journalslink"
                    onChange={handleInput}
                    value={Input.link}
                    name="link"
                    placeholder="Paste your link"
                  />
                </div>
                <div class="form-group">
                  <label for="Journalsfilling">Technologies Implemented</label>
                  <input
                    type="text"
                    class="form-control"
                    value={Input.implemented}
                    onChange={handleInput}
                    id="Journalsfilling"
                    name="implemented"
                  />
                </div>
                <div class="form-group">
                  <label for="Journalsdescription">Description</label>
                  <textarea
                    type="text"
                    class="form-control"
                    value={Input.description}
                    onChange={handleInput}
                    id="Journalsdescription"
                    name="description"
                    rows={3}
                  />
                </div>

                <div class="form-check-inline form-check  d-block col-sm-4">
                  <label for="Journalsissued">Status</label>
                </div>
                <div class="radiobuttons">
                  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="given"
                      onChange={handleInput}
                      checked={Input.given == "issued"}
                      id="Journalsissued"
                      value="issued"
                    />
                    <label for="Journalsissued">issued</label>
                  </div>
                  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="given"
                      onChange={handleInput}
                      id="Journalspending"
                      checked={Input.given == "pending"}
                      value="pending"
                    />
                    <label for="JournalsWorkingNo">pending</label>
                  </div>
                </div>
                <div class="form-group">
                  <label
                    for="JournalsDuration"
                    class={
                      Input.given
                        ? Input.given == "pending"
                          ? " d-none "
                          : " d-sm-inline d-block"
                        : " d-none "
                    }
                  >
                    Date of issue
                  </label>
                  <YearPicker
                    defaultValue={"select year"}
                    start={2010}
                    end={2020}
                    reverse
                    value={Input.DurationTo}
                    required={true}
                    onChange={(year) => {
                      setInput({ ...Input, DurationTo: year });
                      console.log(year);
                    }}
                    classes={
                      "date " +
                      (Input.given
                        ? Input.given == "pending"
                          ? " d-none "
                          : " d-sm-inline d-block"
                        : " d-none ")
                    }
                    name="DurationTo"
                  />
                </div>
                <div class="d-flex align-items-center row upload-input-total">
                  <div class="col-3">
                    <label>Upload Course Pic</label>
                    <label for="AwardAttachment" class="custom-file-upload">
                      <input
                        type="file"
                        class="upload-input file-input upload-input"
                        id="journalAttachement"
                        onChange={fileUpload}
                        name="Attachment"
                      />
                      <i class="fa fa-cloud-upload"></i>Upload
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <div class="w-100 d-flex justify-content-between">
                <div>
                  <button
                    type="button"
                    onClick={deleteChanges}
                    class={
                      "btn bg-yellow delete d-none" + (delet ? "d-inline" : "")
                    }
                    data-dismiss="modal"
                  >
                    Delete
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn bg-yellow close-btn"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={saveChanges}
                    data-dismiss="modal"
                    class="btn bg-yellow"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journals;
>>>>>>> 0af7ab246a2940bf5876b5a1b3de97c69d2d3b09
