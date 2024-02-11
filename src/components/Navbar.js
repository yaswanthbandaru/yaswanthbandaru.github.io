import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
    return (
        <>
            <Navbar bg="info" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Your Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basci-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto justify-content-center">
                            <Nav.Item>
                                <Nav.Link href="#about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#projects">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#skills">Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
