import React from "react"
import { Link } from "react-router-dom"
import './Styles/navbar.css'
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavigationBar () {

    
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>Medium</Navbar.Brand>
        <Nav className="me-auto">
          <Link to='/login'>Login</Link>
          <Link to='/register'>S'inscrire</Link>
          <Link to='/articles'>Articles</Link>
          <Link to='/articles/create'>Ajouter un Article</Link>
          <Link to='/disconnect'>Deco</Link>
        </Nav>
        </Container>
      </Navbar>
    )
}