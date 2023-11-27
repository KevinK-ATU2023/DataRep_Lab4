import { Card } from "react-bootstrap";

function BookItems(props) {
    return(
        <div>
            <Card>
                <Card.Body>
                    <Card.Header><h3>{props.bookInfo.title}</h3></Card.Header>
                    <Card.Img src={props.bookInfo.cover} style={{ width: '200px', padding: '5px'}}></Card.Img>
                    <Card.Text>Author: {props.bookInfo.author}</Card.Text>
                    <Card.Text>ID: {props.bookInfo._id}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BookItems;