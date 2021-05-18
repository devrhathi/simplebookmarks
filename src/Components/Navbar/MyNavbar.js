import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';
import LoginModal from '../Modal/LoginModal';
import RegisterModal from '../Modal/RegisterModal';
import 'firebase/auth';
import firebase from '../../firebase';

function MyNavbar(props) {


  const user = props.user;

  const[login, setLogin] = useState(false);
  const[register, setRegister] = useState(false);
  function handleShow(){setLogin(true); }
  function handleClose(){setLogin(false); setRegister(false);}

  function handleLogin(email, pass){
    //log user in, if failed, show failed modal
    firebase.auth().signInWithEmailAndPassword(email, pass).then((userCreds) => {
      localStorage.setItem('currentUser', JSON.stringify(userCreds.user));
      window.location.reload();
    }).catch((err)=>{
      console.log(err.message);
    });
  }

  function handleRegister(email, pass){
    //first close the login modal, then pop the register modal, similar to login modal and handle the registration of user
    setLogin(false);
    setRegister(true);

    firebase.auth().createUserWithEmailAndPassword(email, pass).then((userCreds) => {
      localStorage.setItem('currentUser', JSON.stringify( userCreds.user));
      window.location.reload();
    }).catch((err)=>{
      console.log(err.message);
    });
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
        handleLogin={handleLogin}
        handleRegister={handleRegister}
      />

      <RegisterModal
        show={register}
        handleClose={handleClose}
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
