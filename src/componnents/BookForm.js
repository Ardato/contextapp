import React,{useContext, useState}from 'react'
import { BookContext } from '../contexts/BookContext';


const NewBookForm = () => {
   const {dispatch}=useContext(BookContext);
   const [title,setTitle] = useState("")
   const [author,setAuthor] = useState("")
        const handleSubmit = (e)=>{
            e.preventDefault()
            dispatch({type:"ADD_BOOK",book:{
                title,author
            }})
            setTitle("")
            setAuthor("")
            
        }
   return(
       <form onSubmit={handleSubmit}>
           <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="book title" required/>
           <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder="author" required/>
           <input type="submit" value="add book"/>
       </form>
   )

}


export default NewBookForm;