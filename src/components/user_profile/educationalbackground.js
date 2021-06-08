<<<<<<< HEAD
import React,{useState,useEffect,useRef} from 'react'
import {YearPicker} from 'react-dropdown-date'

function EducationalBackground()
{
	const [experiences,setExperience]=useState([])
	const [delet,setDelete]=useState(false)
	const initialState={
		level:'',
		title:'',
		boardname:'',
		specialization:'',
		score:'',
		Percentage:'',
		DurationTo:'',
		DurationFrom:'',
		study:'',
		other:''
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
			<div className="d-flex justify-content-between align-items-center">
				<h2 className="">Educational Experience</h2>
				<span data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target=".background-bd-example-modal-lg"className="icon-edit-plus" ><i>&#43;</i></span>
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
									<span class="modal-display-element-heading d-block">{data.data.boardname}</span>
									<span class="modal-display-element d-block ">{data.data.title}</span>
									<span class="modal-display-element-duration text-muted">{data.data.DurationFrom}-</span>
									<span class="modal-display-element-duration text-muted">{data.data.DurationTo}</span>
									<span class="modal-display-element-duration text-muted">{data.data.DurationTo?'':'Present'}</span>
								</div>
								<span onClick={()=>editValues(data.data.key)} data-toggle="modal" data-target=".background-bd-example-modal-lg" className="fa fa-pencil  icon-edit-start"></span>
							</div>
							<hr></hr>
						</div>
					</div>
				))}
			<div class="modal animate__animated  animate__slideInDown fade background-bd-example-modal-lg " tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
			  <div class="modal-dialog-centered modal-dialog modal-lg ">
			    <div class="modal-content">
			    	<div class="modal-header">
			        <h3 class="modal-title form-title">Educational Background</h3>
			        <button type="button" class="close" onClick={Reset} data-dismiss="modal" aria-label="Close">
			        <span aria-hidden="true">&times;</span>
			        </button>
			      	</div>
			    	<div class="modal-body flow-bar">
			    		<form>
                          <div class="form-group">
						    <label for="educationlevel">Select Level</label>
						    <select class="form-control selectedit" value={Input.level} onChange={handleInput} name="level" id="educationlevel">
							  <option class="op">Select</option>
						      <option class="p-10" >1st-10th</option>
                              <option>College</option>
                              <option>University/PG/UG/PHD</option>
						    </select>
						  </div>
						  <div class={"form-group d-none "+(Input.level!=""?(Input.level!=="1st-10th"?"d-block":''):"")}>
						    <label for="educationname">Branch/Course Name</label>
						    <input type="text" class="form-control" id="educationname"onChange={handleInput} value={Input.title} name="title" placeholder="Enter the Course or branch or level"/>
						  </div>
						  <div class="form-group">
						    <label for="educationlink">Board/Recognized University name</label>
						    <input type="text" class="form-control"  id="educationlink"onChange={handleInput} value={Input.boardname} name="boardname" placeholder="Enter the name"/>
						  </div>
                          <div class="form-group">
						    <label for="educationfilling">Specialization</label>
						    <input  type="text" class="form-control"  id="educationfilling" onChange={handleInput} value={Input.specialization} name="specialization" placeholder="Enter specialized subjects" />
						  </div>
                          <div class="form-group">
						    <label for="educationfilling">Score</label>
						    <input  type="text" class="form-control"  id="educationfilling" onChange={handleInput} value={Input.score} name="score" placeholder="Enter  the score" />
						  </div>
                          <div class="form-group">
						    <label for="educationfilling">Percentage</label>
						    <input  type="text" class="form-control"  id="educationsfilling" name="Percentage" onChange={handleInput} value={Input.Percentage} placeholder="Percentage or CGPA" />
						  </div>
                          <div class="form-group">
						    <label for="educationssfilling">Other Ciruclar Activeites</label>
						    <input  type="text" class="form-control"  id="educationssfilling" name="other" onChange={handleInput} value={Input.other} placeholder="Enter if any activites done here" />
						  </div>
						  <div class="form-check-inline form-check  d-block col-sm-4">
						  	<label for="issued">Type of Study</label>
						  </div>
						  <div class="radiobuttons">
						  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
						    <input type="radio" class="form-check-input" checked={Input.study=="fulltime"} onChange={handleInput} id="educationissued" name="study" value="fulltime"/>
						    <label for="educationissued">Full Time</label>
						  </div>
						  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
						    <input type="radio" class="form-check-input"  id="educationpending" onChange={handleInput} checked={Input.study=="correspondence"} name="study" value="correspondence"/>
						    <label for="educationWorkingNo">Correspondence</label>
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
							  <div class={"col-5"+(Input.study?(Input.study=='fulltime'?' d-none ':' d-sm-inline d-block'):' d-none ')}>
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
								<button type="button" onClick={deleteChanges} class={"btn  delete d-none"+(delet?'d-inline':'')} data-dismiss="modal">Delete</button>
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

export default EducationalBackground
=======
import React, { useState, useEffect, useRef } from "react";
import { YearPicker } from "react-dropdown-date";
import { connect } from "react-redux";
import { addEducation } from "../../State/Actions/profile";
function EducationalBackground({ education, addEducation }) {
  const educations = education ? education : [];
  const [experiences, setExperience] = useState(educations);
  const [delet, setDelete] = useState(false);
  const initialState = {
    level: "",
    course: "",
    board: "",
    specialization: "",
    score: "",
    percentage: "",
    joining_date: "",
    completion_date: "",
    study_type: "",
    other: "",
  };
  const [Input, setInput] = useState(initialState);
  const [key, setKey] = useState(0);
  const [change, setChange] = useState(true);
  useEffect(() => {
    const filteredItem = experiences.filter((item) => item.key == key);
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
  const saveChanges = (event) => {
    event.preventDefault();
    addEducation(Input);

    // event.persist();
    // let check = true;
    // experiences.map((item) => {
    //   if (item.data.key == Input.key) {
    //     console.log("data found");
    //     item.data = Input;
    //     check = false;
    //   }
    // });
    // if (check) {
    //   setExperience([...experiences, { data: { ...Input, key: Date.now() } }]);
    // }
    // setInput(initialState);
    // setDelete(false);
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
    <div className="Modal-About1">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="">Educational Experience</h2>
        <span
          data-toggle="modal"
          data-backdrop="static"
          data-keyboard="false"
          data-target=".background-bd-example-modal-lg"
          className="icon-edit-plus"
        >
          <i>&#43;</i>
        </span>
      </div>
      {experiences.map((data) => (
        <div
          class="d-flex align-items-center justfiy-content-end"
          key={data.id}
        >
          <div class="data-container text-center">
            <img src={require("./images/graduate-cap.png")} alt="cap" />
          </div>
          <div class="w-100">
            {/*console.log(data.data.key, "entereeeee", data, Input)*/}
            <div class="d-flex align-items-start justify-content-between">
              <div class="modal-display-main-element">
                <span class="modal-display-element-heading d-block">
                  {data.board}
                </span>
                <span class="modal-display-element d-block ">{data.title}</span>
                <span class="modal-display-element-duration text-muted">
                  {data.joining_date} -
                </span>{" "}
                {/* <span class="modal-display-element-duration text-muted">
                  {data.DurationTo}
                </span> */}
                <span class="modal-display-element-duration text-muted">
                  {data.completion_date ? data.completion_date : "Present"}
                </span>
                <div>Course: {data.course}</div>
                <div>Branch: {data.branch}</div>
              </div>

              <span
                onClick={() => editValues(data.id)}
                data-toggle="modal"
                data-target=".background-bd-example-modal-lg"
                className="fa fa-pencil  icon-edit-start"
              ></span>
            </div>
            <hr></hr>
          </div>
        </div>
      ))}
      <div
        class="modal animate__animated  animate__slideInDown fade background-bd-example-modal-lg "
        tabindex="-1"
        role="dialog"
        aria-labelledby="myExtraLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog-centered modal-dialog modal-lg ">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title form-title">Educational Background</h3>
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
            <div class="modal-body flow-bar">
              <form>
                <div class="form-group">
                  <label for="educationlevel">Select Level</label>
                  <select
                    class="form-control selectedit"
                    value={Input.level}
                    onChange={handleInput}
                    name="level"
                    id="educationlevel"
                  >
                    <option class="op">Select</option>
                    <option value="1" class="p-10">
                      Level 1
                    </option>
                    <option value="2" class="p-10">
                      Level 2
                    </option>
                    <option value="3" class="p-10">
                      Level 3
                    </option>
                    <option value="4" class="p-10">
                      Level 4
                    </option>
                    <option value="5" class="p-10">
                      Level 5
                    </option>

                    <option value="6" class="p-10">
                      Level 6
                    </option>
                    <option value="7" class="p-10">
                      Level 7
                    </option>
                    <option value="8" class="p-10">
                      Level 8
                    </option>
                    <option value="9" class="p-10">
                      Level 9
                    </option>

                    <option value="10" class="p-10">
                      Level 10
                    </option>
                    <option value="11" class="p-10">
                      Level 11
                    </option>
                    <option value="12" class="p-10">
                      Level 12
                    </option>
                    <option value="college" class="p-10">
                      College
                    </option>
                    <option value="university" class="p-10">
                      University
                    </option>
                    <option value="ug" class="p-10">
                      UG
                    </option>
                    <option value="pg" class="p-10">
                      PG
                    </option>
                    <option value="phd" class="p-10">
                      PHD
                    </option>
                  </select>
                </div>
                <div
                  class={
                    "form-group d-none " +
                    (Input.level != ""
                      ? Input.level !== "1st-10th"
                        ? "d-block"
                        : ""
                      : "")
                  }
                >
                  <label for="educationname">Branch/Course Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="educationname"
                    onChange={handleInput}
                    value={Input.course}
                    name="course"
                    placeholder="Enter the Course or branch or level"
                  />
                </div>
                <div class="form-group">
                  <label for="educationlink">
                    Board/Recognized University name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="educationlink"
                    onChange={handleInput}
                    value={Input.board}
                    name="board"
                    placeholder="Enter the name"
                  />
                </div>
                <div class="form-group">
                  <label for="educationfilling">Specialization</label>
                  <input
                    type="text"
                    class="form-control"
                    id="educationfilling"
                    onChange={handleInput}
                    value={Input.specialization}
                    name="specialization"
                    placeholder="Enter specialized subjects"
                  />
                </div>
                <div class="form-group">
                  <label for="educationfilling">Score</label>
                  <input
                    type="text"
                    class="form-control"
                    id="educationfilling"
                    onChange={handleInput}
                    value={Input.score}
                    name="score"
                    placeholder="Enter  the score"
                  />
                </div>
                <div class="form-group">
                  <label for="educationfilling">Percentage</label>
                  <input
                    type="text"
                    class="form-control"
                    id="educationsfilling"
                    name="percentage"
                    onChange={handleInput}
                    value={Input.percentage}
                    placeholder="Percentage or CGPA"
                  />
                </div>
                <div class="form-group">
                  <label for="educationssfilling">
                    Other Ciruclar Activeites
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="educationssfilling"
                    name="other"
                    onChange={handleInput}
                    value={Input.other}
                    placeholder="Enter if any activites done here"
                  />
                </div>
                <div class="form-check-inline form-check  d-block col-sm-4">
                  <label for="issued">Type of Study</label>
                </div>
                <div class="radiobuttons">
                  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
                    <input
                      type="radio"
                      class="form-check-input"
                      checked={Input.study_type == "1"}
                      onChange={handleInput}
                      id="educationissued"
                      name="study_type"
                      value="1"
                    />
                    <label for="educationissued">Full Time</label>
                  </div>
                  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="educationpending"
                      onChange={handleInput}
                      checked={Input.study_type == "2"}
                      name="study_type"
                      value="2"
                    />
                    <label for="educationWorkingNo">Correspondence</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-5">
                    <div
                      class="form-group"
                      style={{
                        display: "flex",
                        marginTop: "20px",
                        width: "100%",
                      }}
                    >
                      <div style={{ with: "50%", marginRight: "100px" }}>
                        <label for="Duration" class="d-sm-inline d-block">
                          From
                        </label>
                        {/* <YearPicker
                        defaultValue={"Year"}
                        start={2010}
                        end={2020}
                        reverse
                        value={Input.completion_date}
                        required={true}
                        onChange={(year) => {
                          setInput({ ...Input, completion_date: year });
                          console.log(year);
                        }}
                        name="completion_date"
                        classes="date"
                      /> */}
                        <input
                          type="date"
                          name="joining_date"
                          value={Input.joining_date}
                          onChange={handleInput}
                        />
                      </div>
                      <div style={{ width: "50%" }}>
                        <label for="Duration" class="d-sm-inline d-block">
                          To
                        </label>
                        <input
                          type="date"
                          name="completion_date"
                          value={Input.completion_date}
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class={
                      "col-5" +
                      (Input.study
                        ? Input.study == "fulltime"
                          ? " d-none "
                          : " d-sm-inline d-block"
                        : " d-none ")
                    }
                  >
                    <div class="form-group">
                      <label for="orgdepartmentsss">To</label>
                      <YearPicker
                        defaultValue={"Year"}
                        start={2010}
                        end={2020}
                        type="date"
                        reverse
                        value={Input.joining_date}
                        required={true}
                        onChange={(year) => {
                          setInput({ ...Input, joining_date: year });
                          console.log(year);
                        }}
                        classes={"date "}
                        name="joining_date"
                      />
                    </div>
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
                    class={"btn  delete d-none" + (delet ? "d-inline" : "")}
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
const mapStateToProps = (state) => ({
  education: state.profile.education,
});

export default connect(mapStateToProps, { addEducation })(
  EducationalBackground
);
>>>>>>> 0af7ab246a2940bf5876b5a1b3de97c69d2d3b09
