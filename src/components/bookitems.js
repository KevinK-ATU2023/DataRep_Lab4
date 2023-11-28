import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BookItems(props) {
    const navigation = useNavigate();

    return(
        <div>
            <Card>
                <Card.Body>
                    <Card.Header><h3>{props.bookInfo.title}</h3></Card.Header>
                    <Card.Img src={props.bookInfo.cover} style={{ width: '200px', padding: '5px'}}></Card.Img>
                    <Card.Text>Author: {props.bookInfo.author}</Card.Text>
                    <Card.Text>ID: {props.bookInfo._id}</Card.Text>
                    <Button onClick={() => { navigation(`/edit/${props.bookInfo._id}`) }}>Edit</Button>
                    <Button onClick={() => { 
                        axios.post(`http://localhost:4000/api/books/delete/${props.bookInfo._id}`)
                        .then((res) => {
                            console.log(res);
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                     }}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BookItems;