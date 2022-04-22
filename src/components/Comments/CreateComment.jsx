import { useState } from "react";
import axios from "axios";

const CreateComment = (video) => {

    const [name, setName] = useState();
    const [body, setBody] = useState();

    const timestamp = new Date().getTime();
    const tempTimestamp = Date(timestamp)
    const [date, setDate] = useState(tempTimestamp);

    function handleSubmit(event){
        event.preventDefault();

        try {
            axios.post("http://localhost:3007/api/comments/",
                {
                    "name": name,
                    "body": body,
                    "like": false,
                    "dislike": false
                }
            )
        }
        catch (ex) {
            console.log(ex)
        }

        setDate(Date(timestamp))
        setName("");
        setBody("");
    }

    return (  
        <form onSubmit={handleSubmit} style={{"width":"40em"}}>
            <div className='form-group'>
                <label>Name</label>
                <input value = {name} className = 'form-control' name= "name" onChange = {(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Comment</label>
                <textarea value = {body} rows = "4" name = "body" className = 'form-control' onChange = {(event) => setBody(event.target.value)}/>
            </div>
            
            <button type='submit'className='btn btn-light' style={{'margin-top':'1em'}}>Comment</button>
        </form>
    );
}
 
export default CreateComment;