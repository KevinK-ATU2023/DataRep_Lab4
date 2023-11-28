import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [front_url, setFrontURL] = useState("");

    function submit_details() {
        // console.log(`Title: ${title}\nAuthor: ${author}\nFront Page URL: ${front_url}`)

        let book = {
            title: title,
            cover: front_url,
            author: author
        }


        axios.post('http://localhost:4000/api/books', book)
        .then((res) => {
            // console.log(res.data);
            navigate('/read');
        })
        .catch ((e) => console.log(e))
    }

    return(
        <div className="footer">
            <h3>Hello from my create componnet!</h3>
            <form>
                <label >Add Book Title:</label><br></br>
                <input type="text" value={title} placeholder="Title" onChange={(e) => {setTitle(e.target.value)}}/><br></br>
                <label >Add Book Author:</label><br></br>
                <input type="text" value={author} placeholder="Author" onChange={(e) => {setAuthor(e.target.value)}}/><br></br>
                <label >Add Front Page Url:</label><br></br>
                <input type="text" value={front_url} placeholder="URL" onChange={(e) => {setFrontURL(e.target.value)}}/><br></br>
                <button onClick={submit_details} >Submit</button><br></br>
            </form>
        </div>
    );
}

export default Create;