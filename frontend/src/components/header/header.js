
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'

function NavScrollExample() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container >
        <Navbar.Brand href="/">
           <Link to="/" style={{color:'black'}}>NOTER</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Form className="m-auto my-2 my-lg-0">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           
          </Form>
          <Nav
            className="d-flex"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/mynotes">
              <Link to="/mynotes" style={{color:'black'}}>MY NOTES</Link>
            </Nav.Link>
            <NavDropdown title="DEEPAK GUPTA" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">MY PROFILE</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                LOGOUT
              </NavDropdown.Item>
            </NavDropdown>        
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;