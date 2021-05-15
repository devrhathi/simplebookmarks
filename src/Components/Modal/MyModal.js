import {Button, Modal, Form} from 'react-bootstrap';

function MyModal(props) { 

    function handleSubmit(event){
      event.preventDefault();

      const formData = new FormData(event.target);

      const title = formData.get('title');
      const url = formData.get('url');
      const desc = formData.get('desc');

      props.handleSubmit(title, url, desc);
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
               <Form.Label>Name</Form.Label>
              <Form.Control name="title" type="text" placeholder="Enter Name Of Link" />
              <Form.Text className="text-muted">
                 Enter Desired Name for your URL
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>URL</Form.Label>
              <Form.Control name="url" type="text" placeholder="URL" />
             </Form.Group>

             <Form.Group>
                <Form.Label>Description</Form.Label>
                 <Form.Control name="desc" as="textarea" rows={3} />
             </Form.Group>

             <Button variant="secondary" onClick={props.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" onClick={props.handleClose} style={{marginLeft : "2rem"}}>
              Save
            </Button>

          </Form>
          </Modal.Body>

        </Modal>
    );
  }

export default MyModal;