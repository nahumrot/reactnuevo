import React from 'react'
import { Navbar, Nav, Container, } from 'react-bootstrap'
import {OutLet, Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <Navbar className='navbg' bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Nyc Life</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Productos">Productos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    <section>
      <OutLet></OutLet>
    </section>
    </>
    
  )
}
