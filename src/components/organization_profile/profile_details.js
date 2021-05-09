import React,{useState,useEffect,useRef} from 'react'
import {YearPicker} from 'react-dropdown-date'
import Select from 'react-select-me';
import 'react-select-me/lib/ReactSelectMe.css';

function Profile()
{
    const [selected, setSelected] = useState('');
    console.log("selected",selected)
    const initialstate={
        DurationFrom:'',
        students:'',
        faculties:'',
        staff:'',
        area:'',
        link:'',
        address:'',
        founded:'',
        affiliation:'',
        fee:'',
        gender:'',
        select:[]
    }
    const options=[    
        { label: "Telugu", value: "Telugu" },
        { label: "English", value: "English" },
        { label: "Hindi ", value: "Hindi"},
        { label: "kanada", value: "Kanada" }
    ]
    const [Input,setInput]=useState(initialstate)
    console.log(Input)
    const handleInput=(event)=>{
		event.persist()
		setInput(Input=>({...Input,[event.target.name]:event.target.value}))
    console.log(Input)
  }
  const Change1=(value)=>{
    setSelected(value)
  }
  useEffect(()=>{
    setInput({...Input,select:[selected]})
  },[selected])
    return(
        <div className="Modal-About1 Modal-About">
        <div className="d-flex justify-content-between align-items-center">
            <h2 className="">Profile Details</h2>
            <span data-toggle="modal" data-target=".profileorganization-bd-example-modal-lg"className="icon-edit-plus" ><i>&#43;</i></span>
        </div>
        <div class="modal fade profileorganization-bd-example-modal-lg " tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog-centered modal-dialog modal-lg ">
            <div class="modal-content">
                <div class="modal-header">
                <h3 class="modal-title form-title">Profile Details</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                  </div>
                  <div class="modal-body flow-bar">
                    <form>
                      <div class="row organizationrow">
                        <div class="col-4">
                          <div class="form-group">
                            <label for="NoStudents">No of Students</label>
                            <input type="text" class="form-control"  id="NoStudents"onChange={handleInput} value={Input.students} name="students" placeholder="Enter  No of Students"/>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group">
                            <label for="faculties">No of Faculties</label>
                            <input  type="text" class="form-control"  id="faculties" onChange={handleInput} value={Input.faculties} name="faculties" placeholder="Enter No of Faculties" />
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group">
                            <label for="staff">No of total staffs</label>
                            <input  type="text" class="form-control"  id="staff" onChange={handleInput} value={Input.staff} name="staff" placeholder="Enter  total staff staff" />
                          </div>
                        </div>
                      </div>
                      <div class="row organizationrow">
                        <div class="col-6">
                          <div class="form-group">
                            <label for="Area">Total Area</label>
                            <input  type="text" class="form-control"  id="Area" name="area" onChange={handleInput} value={Input.area} placeholder="Enter Total Area" />
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="form-group">
                            <label for="websitelink">Website Link</label>
                            <input  type="text" class="form-control"  id="websitelink" name="link" onChange={handleInput} value={Input.link} placeholder="Paste your Website Link" />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="orgaddress">Address</label>
                        <textarea  type="text" class="form-control"  id="orgaddress" name="address" onChange={handleInput} value={Input.address} placeholder="Enter your Address" row={5}/>
                      </div>
                      <div class="row organizationrow">
                        <div class="col-4">
                          <div class="form-group">
                            <label for="foundedby">Founded by</label>
                            <input  type="text" class="form-control"  id="foundedby" name="founded" onChange={handleInput} value={Input.founded} placeholder="Enter Founder of Organization" />
                          </div>
                        </div>
                        <div class="col-4">
                        <div class="form-group">
                          <label for="affiliationby">Affiliation by</label>
                            <input  type="text" class="form-control"  id="affiliationby" name="affiliation" onChange={handleInput} value={Input.affiliation} placeholder="Affiliation" />
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group">
                            <label for="Fee">Average Fee</label>
                            <input  type="text" class="form-control"  id="Fee" name="fee" onChange={handleInput} value={Input.fee} placeholder="Enter Avergae Fee" />
                          </div>
                        </div>
                      </div>
                      <div class="form-check-inline form-check  d-block col-sm-4">
                          <label for="issued">Genders Accepted</label>
                      </div>
                      <div class="radiobuttons">
                      <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
                        <input type="radio" class="form-check-input" checked={Input.gender==="male"} onChange={handleInput} id="orgmale" name="gender" value="male"/>
                        <label for="orgmale">Male</label>
                      </div>
                      <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
                        <input type="radio" class="form-check-input"  id="orgfemale" onChange={handleInput} checked={Input.gender=="female"} name="gender" value="female"/>
                        <label for="orgfemale">female</label>
                      </div>
                      <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
                        <input type="radio" class="form-check-input"  id="orgcoed" onChange={handleInput} checked={Input.gender=="coed"} name="gender" value="coed"/>
                        <label for="orgcoed">Co Ed</label>
                      </div>
                      </div>
                      <div class="form-group multiselect">
                        <label>Select Languages</label>
                        <Select
                          value={selected}
                          onChange={Change1}
                          options={options}
                          multiple
                          s={"selectreact"}
                          searchable
                          listPosition="auto"
                        />
                      </div>
                        <div class="form-group">
                          <label for="Duration" class="d-sm-inline d-block">Established Year</label>
                          <YearPicker
                              defaultValue={'select year'}
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
                          />
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                        <div>
                            <button type="button" class="btn bg-yellow close-btn" data-dismiss="modal">Close</button>
                            <button type="button"  data-dismiss="modal" class="btn bg-yellow">Save changes</button>
                        </div>
                  </div>
            </div>
          </div>
        </div>
    </div>
    )
}
export default Profile