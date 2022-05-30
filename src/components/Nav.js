// import { NavLink } from "react-router-dom";
import '../styles/Nav.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


function Navigation() {

    return (
        <div className="nav" fixed="top">


            <Navbar  fixed="top" variant="dark" className='navbar' >
                <Container>
                    <Navbar.Brand className='logo' ><h2>J.C.L. Painting</h2></Navbar.Brand>

                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/gallery">Gallery</Nav.Link>
                    </Nav>

                </Container>

                <div className='smNavS'>

</div>

<div className='lrgNavS'>

</div>
            </Navbar>


        </div>
    )
}



export default Navigation
