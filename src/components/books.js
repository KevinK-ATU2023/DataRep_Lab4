import { useEffect } from "react";
import BookItems from "./bookitems";

function Books(props) {
    return props.theBooks.map( (item) => {
        return <BookItems bookInfo={item} key={item.isbn} />
    });
}

export default Books;