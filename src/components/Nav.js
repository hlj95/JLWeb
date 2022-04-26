// import { NavLink } from "react-router-dom";
import '../styles/Nav.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


function Navigation() {

    return (
        <div className="navbar">


            <Navbar fixed="top"bg="dark" variant="dark" className='navbar'>
                <Container>
                    <Navbar.Brand >1,2,3,4  Painting & 'Mo</Navbar.Brand>

                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/gallery">Gallery</Nav.Link>
                        </Nav>

                </Container>
            </Navbar>


        </div>
    )
}



export default Navigation
