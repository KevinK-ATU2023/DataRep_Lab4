import BookItems from "./bookitems";

function Books(props) {
    return props.theBooks.map( (item) => {
           return <BookItems bookInfo={item} key={item.isbn} />

        }
    );

    // return (
    //     console.log(props.theBooks)
    // );
}

export default Books;