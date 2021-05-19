import { Button, Modal, Form } from "react-bootstrap";

function LoginModal(props) {
  function handleSubmit(event) {
    event.preventDefault();
    //first, grab all the data and execute the parent element - navbar's method by passing email and pass
    const formData = new FormData(event.target);
    props.handleLogin(formData.get("email"), formData.get("password"));
  }

  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter Email" name="email" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={props.handleClose}>
            Login
          </Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="info" onClick={props.handleRegister}>
          New? Register.
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
