import React, { useState, useEffect } from "react";
import { YearPicker } from "react-dropdown-date";
import { connect } from "react-redux";

function Awards({ awards }) {
  const awardData = awards ? awards : [];
  const [experiences, setExperience] = useState(awardData);
  const [delet, setDelete] = useState(false);
  const initialState = {
    title: "",
    link: "",
    description: "",
    Attachment: "",
    DurationFrom: "",
    DurationTo: "",
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
    console.log("reeeenterrrr");
    event.persist();
    let check = true;
    experiences.map((item) => {
      if (item.key == Input.key) {
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
    setInput({ ...Input, Attachment: event.target.files[0] });
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
                      name="Attachment"
                    />
                    <i class="fa fa-cloud-upload"></i>Upload
                  </label>
                </div>
                <div class="row">
                  <div class="col-5">
                    <div class="form-group">
                      <label for="Duration" class="d-sm-inline d-block">
                        From
                      </label>
                      <YearPicker
                        defaultValue={"Year"}
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
                        classes="date"
                      />
                    </div>
                  </div>
                  <div class={"col-5"}>
                    <div class="form-group">
                      <label for="orgdepartmentsss">To</label>
                      <YearPicker
                        defaultValue={"Year"}
                        start={2010}
                        end={2020}
                        reverse
                        value={Input.DurationTo}
                        required={true}
                        onChange={(year) => {
                          setInput({ ...Input, DurationTo: year });
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

export default connect(mapStateToProps)(Awards);
