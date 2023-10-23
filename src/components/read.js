import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./books";

function Read(){

    const [bookStorage, setBook] = useState([]);

    useEffect(() => {
        axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
        .then((res) => {
            // console.log(res.data.books);
            setBook(res.data.books);
        })
    },)

    return (
        <div className="Header">
            <h2>Hello from Read Component!</h2>
            <Books theBooks={bookStorage}/>
        </div>
    );
}

function setBook() {

}

export default Read;
