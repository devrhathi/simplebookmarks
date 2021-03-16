import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';

function MyNavbar() {
    return (
        <div className="_Navbar">
            <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="#home">

  Hello.

  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default MyNavbar
