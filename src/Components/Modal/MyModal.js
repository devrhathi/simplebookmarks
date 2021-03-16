import {Button, Modal, Form} from 'react-bootstrap';

function MyModal(props) { 
    return (
        <Modal show={props.show} onHide={props.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <Form>
            <Form.Group>
               <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name Of Link" />
              <Form.Text className="text-muted">
                 Enter Desired Name for your URL
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>URL</Form.Label>
              <Form.Control type="text" placeholder="URL" />
             </Form.Group>

             <Form.Group>
                <Form.Label>Description</Form.Label>
                 <Form.Control as="textarea" rows={3} />
             </Form.Group>

          </Form>
          </Modal.Body>


          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={props.handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }

export default MyModal;