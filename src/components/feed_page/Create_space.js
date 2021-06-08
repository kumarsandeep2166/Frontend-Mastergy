
import React,{useState} from 'react'
import Feed_left_element from './feed_left_element'

function Create_space()
{
    const initialState={
		title:'',
		description:''
	}
	const [skill,setSkill]=useState([])
	const [Input,setInput]=useState(initialState)
	const saveChanges=()=>{
		setInput('')
		setSkill([...skill,Input])
	}
	const Reset=()=>{
		setInput('')
	}
	const handleInput=(event)=>{
		event.persist()
		setInput(Input=>({...Input,[event.target.name]:event.target.value}))
		console.log(Input)
	}
    console.log(skill)
	return(
		<div className="Modal">
            <button class="feed-left-element feed-left-create btn" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target=".createspace-bd-example-modal-lg"><span class="feed-plus" >+</span>Create Space</button>
			<div id="SkillsSize">
			<div class="row" id="AllSkills">
				{skill.map( item => <Feed_left_element name={item.title} description={item.description}/> )}
			</div>
			</div>
			<div class="modal fade createspace-bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div class="modal-dialog modal-dialog-centered" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title" id="exampleModalLabel">Enter</h5>
			        <button type="button" onClick={Reset} class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="coursesname">Name</label>
                            <input type="text" class="form-control" id="coursesname" onChange={handleInput} value={Input.title} name="title" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <label for="coursesname">description</label>
                            <input type="text" class="form-control" id="description" onChange={handleInput} value={Input.description} name="description" placeholder="Name"/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" onClick={saveChanges} data-dismiss="modal" class="btn btn-primary">Save changes</button>
                        </div>
                    </form>
			    </div>
                </div>
			  </div>
			</div>
		</div>
	)
}

export default Create_space