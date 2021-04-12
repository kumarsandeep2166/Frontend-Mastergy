import React, { useState, useEffect } from "react";
import { YearPicker } from "react-dropdown-date";
import { connect } from "react-redux";
import { addAwards } from "../../State/Actions/profile";
import FormData from "form-data";

function Awards({ awards, addAwards }) {
  const awardData = awards ? awards : [];
  const [experiences, setExperience] = useState(awardData);
  const [delet, setDelete] = useState(false);
  const initialState = {
    title: "",
    link: "",
    description: "",
    content_file: "",
    joining_date: "",
    completion_date: "",
    organization: "",
  };
  const [Input, setInput] = useState(initialState);
  const [key, setKey] = useState(0);
  const [change, setChange] = useState(true);
  console.log(Input, "dsfffffffffff");
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
    //addAwards(Input);
    // const test = new FormData();
    // test.append("files", { upload_files: Input.content_file });
    // delete Input.content_file;
    // test.append("data", Input);
    // console.log(test);
    addAwards(Input);
  };
  const editValues = (key) => {
    console.log("Entered");
    setKey(key);
    setDelete(true);
    setChange(!change);
  };
  const Reset = (event) => {
    event.persist();
    setInput(initialState);
    setDelete(false);
  };
  const fileUpload = (event) => {
    //setInput({ ...Input, content_file: { attach: event.target.files[0] } });

    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      console.log("Encoded Base 64 File String:", reader.result);

      /******************* for Binary ***********************/
      var data = reader.result.split(",")[1];
      var binaryBlob = atob(data);
      console.log("Encoded Binary File String:", binaryBlob);
      addAwards({
        ...Input,
        content_file: binaryBlob,
      });
    };
    reader.readAsDataURL(file);
  };
  const deleteChanges = () => {
    setDelete(false);
    var filterItems = experiences.filter((item) => item.key !== Input.key);
    console.log("Delete");
    console.log(Input.key, filterItems);
    setExperience([...filterItems]);
    setInput(initialState);
  };
  return (
    <div className="Modal-About">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="">Awards/Achievements</h2>
        <span
          data-toggle="modal"
          data-target=".Awards-bd-example-modal-lg"
          data-backdrop="static"
          data-keyboard="false"
          className="icon-edit-plus"
        >
          &#43;
        </span>
      </div>
      {experiences.map((data) => (
        <div
          class="d-flex align-items-center justfiy-content-end"
          key={data.key}
        >
          <div class="data-container text-center">
            <img src={require("./images/graduate-cap.png")} alt="cap" />
          </div>
          <div class="w-100">
            {console.log(data.key, "entereeeee", data, Input)}
            <div class="d-flex align-items-start justify-content-between">
              <div class="modal-display-main-element">
                <span class="modal-display-element-heading d-block">
                  {data.title}
                </span>
                <a class="modal-display-element d-block">{data.link}</a>
                <span class="modal-display-element-duration text-muted">
                  {data.from_date} -{" "}
                </span>
                <span class="modal-display-element-duration text-muted">
                  {data.DurationTo}
                </span>
                <span class="modal-display-element-description d-block">
                  {data.description}
                </span>
              </div>
              <span
                onClick={() => editValues(data.key)}
                data-toggle="modal"
                data-target=".Awards-bd-example-modal-lg"
                className="fa fa-pencil  icon-edit-start"
              ></span>
            </div>
            <hr></hr>
          </div>
        </div>
      ))}
      <div
        class="modal fade Awards-bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myExtraLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog-centered modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title form-title">Awards</h3>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="Awardname">Award Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Awardname"
                    onChange={handleInput}
                    value={Input.title}
                    name="title"
                    placeholder="Enter the title of award"
                  />
                </div>
                <div class="form-group">
                  <label for="Awardlink">Organization</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Awardlink"
                    name="organization"
                    onChange={handleInput}
                    value={Input.organization}
                    placeholder="Name of the Organization"
                  />
                </div>
                <div class="form-group">
                  <label for="Awardlink">Link</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Awardlink"
                    name="link"
                    onChange={handleInput}
                    value={Input.link}
                    placeholder="Paste your link"
                  />
                </div>
                <div class="form-group">
                  <label for="Awarddescription">Description</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="Awarddescription"
                    onChange={handleInput}
                    value={Input.description}
                    name="description"
                    row={3}
                  />
                </div>
                <div class="form-group">
                  <label>Award Pic</label>
                  <label for="AwardAttachment" class="custom-file-upload">
                    <input
                      type="file"
                      class="file-input"
                      id="AwardAttachment"
                      onChange={fileUpload}
                      name="content_file"
                    />
                    <i class="fa fa-cloud-upload"></i>Upload
                  </label>
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

                        <input
                          type="date"
                          name="joining_date"
                          value={Input.joining_date}
                          onChange={handleInput}
                        />
                      </div>
                      {!Input.working && (
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
                      )}
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

const mapStateToProps = (state) => ({
  awards: state.profile.awards,
});

export default connect(mapStateToProps, { addAwards })(Awards);
