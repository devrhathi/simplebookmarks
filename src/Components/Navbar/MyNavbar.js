import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';
import LoginModal from '../Modal/LoginModal';

function MyNavbar(props) {

  const user = props.user;
  const[login, setLogin] = useState(false);
  function handleShow(){setLogin(true)}
  function handleClose(){setLogin(false)}

  let method = "LOGIN";

  function handleLogin(){
    //log user in, if failed, show failed modal
  }

  function handleRegister(){
    //first close the login modal, then pop the register modal, similar to login modal and handle the registration of user
  }

    return (
        <div className="_Navbar">
            <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="#home">

  Hello.

  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login" onClick={handleShow}>{user ? (user.email): (<>Login</>)}</a>

      <LoginModal
        show={login}
        handleClose={handleClose}
        title={"Login"}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
      />

    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default MyNavbar
