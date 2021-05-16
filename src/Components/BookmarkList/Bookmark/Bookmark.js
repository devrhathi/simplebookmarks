import React, {useState} from 'react';
import {Button, Collapse} from 'react-bootstrap';
import classes from './Bookmark.module.css';
import MyModal from '../../Modal/MyModal';

function Bookmark(props) {
    const title = props.title;
    const url = props.url;
    const desc = props.desc;

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
                  {title}
              </h3>

              <div className={classes._Url}>
              <h5 onClick={()=> setOpen(!open)}>
                  {url}
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
                  <p>{desc}</p>
                  
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