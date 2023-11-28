import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Card } from 'react-bootstrap';

function Edit() {
    let { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");

    useEffect( () => {
        axios.get(`http://localhost:4000/api/books/${id}`)
        .then((res) => {
            // console.log(res.data)
            setTitle(res.data.title);
            setAuthor(res.data.author);
            setCover(res.data.cover);
        }).catch((error) => {
            console.log(error)
        })
    }, []);

    // when the user completes form and wants to make the changes
    let handle_sumbit = (event) => {
        event.preventDefault()

        let new_book = {
            id: id,
            title: title,
            author: author,
            cover: cover
        }

        axios.put(`http://localhost:4000/api/books/${id}`, new_book)
        .then((res) => {
            // console.log(res.data)
            navigate('/read');
        }).catch((e) => {
            console.log(e)
        })
    }

    return(
        <>
            <Card>
                <Card.Body>
                    <Card.Header><h3>{title}</h3></Card.Header>
                    <Card.Img src={cover} style={{ width: '200px', padding: '5px'}}></Card.Img>
                    <Card.Text>Author: {author}</Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <div>
                <form onSubmit={handle_sumbit}>
                    <div>
                        <label>Add Book Title: </label>
                        <input type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <br></br>
                    <div>
                        <label>Add Book Author: </label>
                        <input type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                    <br></br>
                    <div>
                        <label>Add Book Cover URL: </label>
                        <input type="text"
                            value={cover}
                            onChange={(e) => setCover(e.target.value)} />
                    </div>
                    <br></br>
                    <input type="submit" value="Edit Book" className="btn btn-primary" />
                </form>
            </div>
        </>
    )
}

export default Edit;