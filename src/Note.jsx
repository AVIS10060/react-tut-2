

const Note= (props)=> {
    return (
        <>
        
         <div className="notes">
      <h2>{props.title}</h2>
      <br/>
      <p>{props.content}</p>
      <br/>
      <button ><i className="fa-regular fa-trash-can"></i></button>
      </div>
        
             
        </>
    )

}
export default Note;