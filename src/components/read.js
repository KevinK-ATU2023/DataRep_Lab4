import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./books";

function Read(){

    const [bookStorage, setBook] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/books')
        .then((res) => {
            // console.log(res.data);
            setBook(res.data);
        })
        .catch((e) => {
            console.log(e)
        })
    },)

    return (
        <div className="Header">
            <h2>Hello from Read Component!</h2>
            <Books theBooks={bookStorage}/>
        </div>
    );
}

export default Read;
