import {Button, Modal, Form} from 'react-bootstrap';

function LoginModal(props) { 
    return (
        <Modal show={props.show} onHide={props.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <Form>
            <Form.Group>
               <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter Email" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
             </Form.Group>

          </Form>
          </Modal.Body>


          <Modal.Footer>
            <Button variant="info" onClick={props.handleRegister}>
              New? Register
            </Button>
            <Button variant="secondary" onClick={props.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={props.handleLogin}>
              Login
            </Button>

          </Modal.Footer>
        </Modal>
    );
  }

export default LoginModal;