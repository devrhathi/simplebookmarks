import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import LoginModal from "../Modal/LoginModal";
import RegisterModal from "../Modal/RegisterModal";
import "firebase/auth";
import firebase from "../../firebase";
import "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../../Redux/Actions";

function MyNavbar() {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();

  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  function handleShow() {
    setLogin(true);
  }
  function handleClose() {
    setLogin(false);
    setRegister(false);
  }

  function handleLogin(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        localStorage.setItem("currentUser", JSON.stringify(user.user));

        dispatch(setAuth(user.user));
      });
  }

  function handleRegister(email, password) {
    setLogin(false);
    setRegister(true);

    //redux
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        localStorage.setItem("currentUser", JSON.stringify(user.user));

        dispatch(setAuth(user.user));
      });
  }

  return (
    <div className="_Navbar">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Hello.</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <a href="#" onClick={handleShow}>
              {user ? user.email : <>Login</>}
            </a>
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
  );
}

export default MyNavbar;
