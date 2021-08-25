import React, { useState, useEffect, useRef } from 'react';
import { YearPicker } from 'react-dropdown-date';
import { connect } from 'react-redux';
import { addEvent } from '../../State/Actions/feed';

function OrganizationEvents({ addEvent }) {
  const [experiences, setExperience] = useState([]);
  const [delet, setDelete] = useState(false);
  const initialState = {
    title: '',
    description: '',
    Process: '',
    Type: '',
    price: '',
    courseAttach: '',
    fromDate: '',
    picture: '',
    toDate: '',
  };
  const [Input, setInput] = useState(initialState);
  const [key, setKey] = useState(0);
  const [change, setChange] = useState(true);

  const pictureImage = useRef(null);

  useEffect(() => {
    const filteredItem = experiences.filter((item) => item.data.key == key);
    const ppp = filteredItem;
    setInput(filteredItem);
    filteredItem.map((item) => setInput(item.data));
  }, [change]);
  const handleInput = (event) => {
    event.persist();
    setInput((Input) => ({
      ...Input,
      [event.target.name]: event.target.value,
    }));
  };
  const saveChanges = (event) => {
    addEvent(Input);

    setInput(initialState);
    setDelete(false);
  };
  const editValues = (key) => {
    setDelete(true);
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
    console.log('Delete');
    console.log(Input.key, filterItems);
    setExperience([...filterItems]);
    setInput(initialState);
  };
  const fileUpload = (event) => {
    setInput((Input) => ({
      ...Input,
      picture: pictureImage.current.files[0],
    }));
  };
  return (
    <div>
      <div
        class="modal fade orgevents-bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog-centered modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title form-title">Events</h3>
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
                  <label for="coursesname">Event Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="coursesname"
                    onChange={handleInput}
                    value={Input.title}
                    name="title"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group">
                  <label for="coursesprovider">About Course</label>
                  <textarea
                    type="file"
                    rows={5}
                    class="form-control"
                    id="coursesprovider"
                    onChange={handleInput}
                    value={Input.description}
                    name="description"
                    placeholder="Description"
                  />
                </div>
                <div class="radiobuttonsspace">
                  <label for="compelted" class="radiolabel">
                    Process
                  </label>
                  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
                    <input
                      type="radio"
                      class="form-check-input"
                      autoComplete="off"
                      id="coursesYes"
                      onChange={handleInput}
                      checked={Input.Process == 'online'}
                      value="online"
                      name="Process"
                    />
                    <label for="courseYes">online</label>
                  </div>
                  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
                    <input
                      type="radio"
                      class="form-check-input"
                      autoComplete="off"
                      id="coursesNo"
                      value="offline"
                      onChange={handleInput}
                      checked={Input.Process == 'offline'}
                      name="Process"
                    />
                    <label for="coursesNo">offline</label>
                  </div>
                </div>
                <div class="radiobuttonsspace">
                  <label for="compelted" class="radiolabel">
                    Type
                  </label>
                  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
                    <input
                      type="radio"
                      class="form-check-input"
                      autoComplete="off"
                      id="coursesYes"
                      onChange={handleInput}
                      checked={Input.Type == 'free'}
                      value="free"
                      name="Type"
                    />
                    <label for="courseYes">free</label>
                  </div>
                  <div class="form-check form-check-inline d-sm-inline d-block col-sm-4">
                    <input
                      type="radio"
                      class="form-check-input"
                      autoComplete="off"
                      id="coursesNo"
                      value="paid"
                      onChange={handleInput}
                      checked={Input.Type == 'paid'}
                      name="Type"
                    />
                    <label for="coursesNo">paid</label>
                  </div>
                </div>
                <div
                  className="form-group"
                  className={
                    Input.Type
                      ? Input.Type == 'free'
                        ? ' d-none '
                        : ' d-sm-inline d-block'
                      : ' d-none '
                  }
                >
                  <label for="coursesname">Price</label>
                  <input
                    type="text"
                    class="form-control"
                    id="coursesname"
                    onChange={handleInput}
                    value={Input.price}
                    name="price"
                    placeholder="Enter the Price"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <div class="radiobuttonsspace">
                    <label for="birthday">From:</label>
                    <input
                      type="date"
                      id="birthday"
                      class="datainput"
                      name="fromDate"
                      value={Input.fromDate}
                      onChange={handleInput}
                    />
                  </div>
                  <div class="radiobuttonsspace">
                    <label for="birthday">To:</label>
                    <input
                      type="date"
                      id="birthday"
                      class="datainput"
                      name="toDate"
                      value={Input.toDate}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div class="d-flex align-items-center row upload-input-total">
                  <div class="col-3">
                    <label>Attach Syllabus</label>
                    <label
                      onClick={() => pictureImage.current.click()}
                      for="AwardAttachment"
                      class="custom-file-upload"
                    >
                      <input
                        type="file"
                        class="upload-input file-input upload-input"
                        id="sdss"
                        onChange={fileUpload}
                        name="picture"
                        ref={pictureImage}
                      />
                      <i class="fa fa-cloud-upload"></i>Choose file
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
                      'btn bg-yellow delete d-none' + (delet ? 'd-inline' : '')
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
                    Post
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addEvent })(OrganizationEvents);
