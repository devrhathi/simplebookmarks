import React, {useState} from 'react';
import {Button, Collapse} from 'react-bootstrap';
import classes from './Bookmark.module.css';
import MyModal from '../../Modal/MyModal';

function Bookmark() {
    const [open, setOpen] = useState(false);
    const [copy, setCopy] = useState('Copy');
    const [edit, setEdit] = useState(false);

    function copyHandler(){
      navigator.clipboard.writeText('yo man sup');
      setCopy('Copied!');

      setTimeout(copiedHandler, 2000);
    }

    function copiedHandler(){setCopy('Copy');}

    function handleShow(){
      setEdit(true);
    }

    function handleClose(){
      setEdit(false);
    }

    return (
      <div 
      className={classes._Bookmark}
      >
          <div className={classes._Link}>
              <h3 onClick={()=> setOpen(!open)}>
                  Google
              </h3>

              <div className={classes._Url}>
              <h5 onClick={()=> setOpen(!open)}>
                  https://www.google.com
              </h5>
              <Button 
              onClick={copyHandler}
              variant="secondary" false 
              className={classes._copyBtn}
              >
                {copy}
              </Button>
              </div>
          </div>

          <Collapse in={open}>
              <div className={classes._Desc}>
                  <p>Gotta go to this website and search why i am coding right now whats wrong with me lmfao idk what im doing with my life my brain hurts making this shit idk what to do next im typing fast as ... boiiiiiiiii</p>

                <div className={classes._Buttons}>
                  <Button 
                    variant="primary" 
                    className={classes._editBtn}
                    onClick={handleShow}
                    >Edit
                    </Button>

                  <Button variant="danger" className={classes._deleteBtn}>Delete</Button>
                </div>
              </div>
          </Collapse>

          <MyModal 
          show={edit} 
          title={'Edit'}
          handleClose={handleClose} 
          handleShow={handleShow}/> 

      </div>
    );
  }

  export default Bookmark;