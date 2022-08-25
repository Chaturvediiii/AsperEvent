import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'; 
import "./Header.css";

function Header() {
  return (
    <Navbar bg="dark" expand="lg" className="text-white b-6">
      <Container className="text-white">
        <Navbar.Brand href="#home" style={{
          color:'#D51828'
        }} className="fs-4">Asper</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Link to="/" className="text-white mx-4" style={{
            textDecoration:'none',
          }}>Home</Link>
            <Link to="/events" className="text-white mx-4" style={{
            textDecoration:'none',
          }}>Events</Link>
         <Link to="/register" className="text-white mx-4" style={{
            textDecoration:'none',
          }}>Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
