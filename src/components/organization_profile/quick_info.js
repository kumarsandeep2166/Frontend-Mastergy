<<<<<<< HEAD
import React from 'react'
import Element from './quick_info_element'
import Element1 from './quick-info-element1'
function QuickInfo()
{
	return(
		<div className="Modal-About">
			<div className="d-flex justify-content-between align-items-center">
				<h2 className="">Quick Info</h2>
			</div>
			<div className="quick-info-dummy">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			</div>
			<table class="quick-info-table" id="customers">
				<tr class="quick-info-tr">
					<th>Ranked in MBA</th>
					<td>1st</td> 
					<th>Type of Institute</th>
					<td>Institute of National Importance</td>
				</tr>
				<tr>
					<th>Ownership</th>
					<td>Public/Government</td> 
					<th>Genders Accepted</th>
					<td>Co-Ed</td>
				</tr>
				<tr>
					<th>Affilliation</th>
					<td>UGC,AICTE</td> 
					<th>ESTD Year</th>
					<td>1961</td>
				</tr>
				<tr>
					<th>Total Area</th>
					<td>100 acre</td> 
					<th>Total Faculty</th>
					<td>96</td>
				</tr>
				<tr>
					<th>Total Student Enrollments</th>
					<td>1008</td> 
					<th>Languages Spoken</th>
					<td>English,Oriya,Hindi</td>
				</tr>
				<tr>
					<th>Avg LPA</th>
					<td>10 L</td> 
					<th>WEBSITE LINK</th>
					<td>www.llma.ac.in</td>
				</tr>
			</table>
			<div class="space"></div>
		</div>
	)
}

export default QuickInfo
=======
import React, { useState, useEffect, useRef } from "react";
import { YearPicker } from "react-dropdown-date";
import Select from "react-select-me";
import "react-select-me/lib/ReactSelectMe.css";
import Element from "./quick_info_element";
import Element1 from "./quick-info-element1";
import { connect } from "react-redux";
import { updateOrganizationProfile } from "../../State/Actions/organizationProfile";

function QuickInfo({ profile, updateOrganizationProfile }) {
  const [selected, setSelected] = useState("");
  console.log("selected", selected);
  const initialstate = {
    DurationFrom: profile.establishment_year,
    students: profile.number_of_students,
    faculties: profile.number_of_faculities,
    staff: profile.number_of_total_staff,
    area: profile.total_area,
    link: profile.website_link,
    address: profile.address,
    founded: profile.establishment_year,
    affiliation: profile.affiliation_by,
    fee: profile.avg_fee,
    gender: profile.gender_accepted,
    select: [],
  };
  const options = [
    { label: "Telugu", value: "Telugu" },
    { label: "English", value: "English" },
    { label: "Hindi ", value: "Hindi" },
    { label: "kanada", value: "Kanada" },
  ];
  const [Input, setInput] = useState(initialstate);
  console.log(Input);
  const handleInput = (event) => {
    event.persist();
    setInput((Input) => ({
      ...Input,
      [event.target.name]: event.target.value,
    }));
    console.log(Input);
  };
  const Change1 = (value) => {
    setSelected(value);
  };
  useEffect(() => {
    setInput({ ...Input, select: [selected] });

    console.log("input", Input);
  }, [selected]);
  return (
    <>
      <div className="Modal-About">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="">Quick Info</h2>
        </div>
        <div className="quick-info-dummy">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <table class="quick-info-table" id="customers">
          <tr class="quick-info-tr">
            <th>Ranked in MBA</th>
            <td>1st</td>
            <th>Type of Institute</th>
            <td>Institute of National Importance</td>
          </tr>
          <tr>
            <th>Ownership</th>
            <td>Public/Government</td>
            <th>Genders Accepted</th>
            <td>Co-Ed</td>
          </tr>
          <tr>
            <th>Affilliation</th>
            <td>UGC,AICTE</td>
            <th>ESTD Year</th>
            <td>1961</td>
          </tr>
          <tr>
            <th>Total Area</th>
            <td>100 acre</td>
            <th>Total Faculty</th>
            <td>96</td>
          </tr>
          <tr>
            <th>Total Student Enrollments</th>
            <td>1008</td>
            <th>Languages Spoken</th>
            <td>English,Oriya,Hindi</td>
          </tr>
          <tr>
            <th>Avg LPA</th>
            <td>10 L</td>
            <th>WEBSITE LINK</th>
            <td>www.llma.ac.in</td>
          </tr>
        </table>
        <div class="space"></div>
      </div>

      {/*Modal Code ahead*/}
      <div
        class="modal fade profileorganization-bd-example-modal-lg "
        tabindex="-1"
        role="dialog"
        aria-labelledby="myExtraLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog-centered modal-dialog modal-lg ">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title form-title">Profile Details</h3>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body flow-bar">
              <form>
                <div class="row organizationrow">
                  <div class="col-4">
                    <div class="form-group">
                      <label for="NoStudents">No of Students</label>
                      <input
                        type="text"
                        class="form-control"
                        id="NoStudents"
                        onChange={handleInput}
                        value={Input.students}
                        name="students"
                        placeholder="Enter  No of Students"
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-group">
                      <label for="faculties">No of Faculties</label>
                      <input
                        type="text"
                        class="form-control"
                        id="faculties"
                        onChange={handleInput}
                        value={Input.faculties}
                        name="faculties"
                        placeholder="Enter No of Faculties"
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-group">
                      <label for="staff">No of total staffs</label>
                      <input
                        type="text"
                        class="form-control"
                        id="staff"
                        onChange={handleInput}
                        value={Input.staff}
                        name="staff"
                        placeholder="Enter  total staff staff"
                      />
                    </div>
                  </div>
                </div>
                <div class="row organizationrow">
                  <div class="col-6">
                    <div class="form-group">
                      <label for="Area">Total Area</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Area"
                        name="area"
                        onChange={handleInput}
                        value={Input.area}
                        placeholder="Enter Total Area"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label for="websitelink">Website Link</label>
                      <input
                        type="text"
                        class="form-control"
                        id="websitelink"
                        name="link"
                        onChange={handleInput}
                        value={Input.link}
                        placeholder="Paste your Website Link"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="orgaddress">Address</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="orgaddress"
                    name="address"
                    onChange={handleInput}
                    value={Input.address}
                    placeholder="Enter your Address"
                    row={5}
                  />
                </div>
                <div class="row organizationrow">
                  <div class="col-4">
                    <div class="form-group">
                      <label for="foundedby">Founded by</label>
                      <input
                        type="text"
                        class="form-control"
                        id="foundedby"
                        name="founded"
                        onChange={handleInput}
                        value={Input.founded}
                        placeholder="Enter Founder of Organization"
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-group">
                      <label for="affiliationby">Affiliation by</label>
                      <input
                        type="text"
                        class="form-control"
                        id="affiliationby"
                        name="affiliation"
                        onChange={handleInput}
                        value={Input.affiliation}
                        placeholder="Affiliation"
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-group">
                      <label for="Fee">Average Fee</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Fee"
                        name="fee"
                        onChange={handleInput}
                        value={Input.fee}
                        placeholder="Enter Avergae Fee"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-check-inline form-check  d-block col-sm-4">
                  <label for="issued">Genders Accepted</label>
                </div>
                <div class="radiobuttons">
                  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
                    <input
                      type="radio"
                      class="form-check-input"
                      checked={Input.gender === "male"}
                      onChange={handleInput}
                      id="orgmale"
                      name="gender"
                      value="male"
                    />
                    <label for="orgmale">Male</label>
                  </div>
                  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="orgfemale"
                      onChange={handleInput}
                      checked={Input.gender == "female"}
                      name="gender"
                      value="female"
                    />
                    <label for="orgfemale">female</label>
                  </div>
                  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="orgcoed"
                      onChange={handleInput}
                      checked={Input.gender == "coed"}
                      name="gender"
                      value="coed"
                    />
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
                  <label for="Duration" class="d-sm-inline d-block">
                    Established Year
                  </label>
                  <YearPicker
                    defaultValue={"select year"}
                    start={2010}
                    end={2020}
                    reverse
                    value={Input.DurationFrom}
                    required={true}
                    onChange={(year) => {
                      setInput({ ...Input, DurationFrom: year });
                      console.log(year);
                    }}
                    name="DurationFrom"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
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
                  data-dismiss="modal"
                  class="btn bg-yellow"
                  onClick={() => updateOrganizationProfile(Input, profile.id)}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { updateOrganizationProfile })(
  QuickInfo
);
>>>>>>> 0af7ab246a2940bf5876b5a1b3de97c69d2d3b09
