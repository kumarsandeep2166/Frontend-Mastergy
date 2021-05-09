import React,{useState,useRef} from 'react'
import ContentEditable from 'react-contenteditable'

function OrganizationAbout() {
  const [about,setAbout]=useState('Enter About')
  const inputRef=useRef(null)
  const editable=()=>{
    console.log(about,"sandy")
    inputRef.current.contentEditable=true
    inputRef.current.focus()
  }
  const onLostFocus=()=>{
    inputRef.current.contentEditable=false
  }
  return(
    <div className="organization-about">
      <div className="d-flex  align-items-center justify-content-between" id="AboutHeading">
        <h3 className="font-weight-light">About</h3>
        <span onClick={editable} className="fa fa-pencil" id="editicon"></span>
      </div>
      <ContentEditable html={about} id="abouttext"  onChange={event=>setAbout(event.target.value)}  onBlur={onLostFocus} innerRef={inputRef} />
    </div>
  )
}

export default OrganizationAbout