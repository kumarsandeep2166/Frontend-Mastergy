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
    <div className="Modal-About">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="">About</h2>
        <span onClick={editable} className="icon-edit-pencil fa fa-pencil"></span>
    </div>
      <ContentEditable html={about} id="abouttext"  onChange={event=>setAbout(event.target.value)}  onBlur={onLostFocus} innerRef={inputRef} />
    </div>
  )
}

export default OrganizationAbout