import { useState } from "react";

const CreateNote=(props)=>{
    const[note,setNote] = useState({
        title: "",
        content: "",
    })

    const inputEvent = (event) => {
        const {name,value} = event.target
 
        setNote((prevdata)=>{
            return { 
                ...prevdata,
                [name] : value,
                

            }
        })

    }
    const addEvent = ()=>{
        props.passNote(note);
        setNote({
            title:"",
            content: ""
        })


    }

    return(
        <>
         <div className='title-body'>
    
    <div className="title">
    
    <input type="text" name ="title"value = {note.title} onChange={inputEvent} placeholder="Title"/>
    <br />
    <textarea   name = "content" value = {note.content} onChange= {inputEvent} id="" placeholder="write a note..."></textarea>

    <i className="fa-solid fa-rotate-right"></i>
    <br />
    <button   onClick= {addEvent}    className="fa-solid fa-plus" ></button>
  
    </div>
    </div>
        </>
    )

}

export default CreateNote;