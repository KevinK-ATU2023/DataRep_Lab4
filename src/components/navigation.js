import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation_Bar() {
    return(
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/read">Read</Nav.Link>
                    <Nav.Link href="/create">Create</Nav.Link>
                    <Nav.Link href="http://localhost:4000/api/books">Books API</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    );
}

export default Navigation_Bar;