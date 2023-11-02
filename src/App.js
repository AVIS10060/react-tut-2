import logo from './logo.svg';
import './App.css';
import "./index.css"
import Header from './Header'
import CreateNote from './CreateNote'
import Note from './Note'
import { useState } from 'react';

function App() {

  const [addItem,setItem] = useState([])
  const addNote =(note)=>{
    setItem((prevData) =>{
      return [ ...prevData , note]
    })
  }
  const onSubmits = (event)=>{
    event.preventDefault()
    
  }


  return (
    <>
    <div className="page">
    <form onSubmit={onSubmits}>
    <Header/>
    <CreateNote  passNote = {addNote}/>
    <div className="note-body">
    {
      addItem.map((val,index) => {
        return (<Note
        key = {index}
        id = {index}
        title = {val.title}
        content = {val.content}
        />
        )
      })
    }
    </div>
    
    </form>

    </div>
    </>

  )
  
  }


  export default App
