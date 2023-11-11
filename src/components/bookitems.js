import { Card } from "react-bootstrap";

function BookItems(props) {
    return(
        <div>
            <Card>
                <Card.Body>
                    <Card.Header><h3>{props.bookInfo.title}</h3></Card.Header>
                    <Card.Img src={props.bookInfo.thumbnailUrl} style={{ width: '200px', padding: '5px'}}></Card.Img>
                    <Card.Text>{props.bookInfo.authors}</Card.Text>
                </Card.Body>
                
                <form action='http://localhost:4000/api/books' method="POST">
                    <input name="title" type="hidden" value={props.bookInfo.title} />
                    <input name="code" type="hidden" value={props.bookInfo.isbn} />
                    <input name="poster_url" type="hidden" value={props.bookInfo.thumbnailUrl} />
                    <input type="submit" value={"POST"}/>
                </form>

            </Card>
        </div>
    );
}

export default BookItems;