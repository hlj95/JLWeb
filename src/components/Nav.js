// import { NavLink } from "react-router-dom";
import '../styles/Nav.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


function Navigation() {

    return (
        <div className="navbar">


            <Navbar fixed="top" variant="dark" >
                <Container>
                    <Navbar.Brand className='logo' >J.C.L. Painting</Navbar.Brand>

                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/gallery">Gallery</Nav.Link>
                        </Nav>

                </Container>
            </Navbar>


        </div>
    )
}



export default Navigation
