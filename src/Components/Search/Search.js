import React, {useState} from 'react'
import {FormControl, Button } from 'react-bootstrap'
import classes from './Search.module.css';
import MyModal from '../Modal/MyModal';
import firebase from '../../firebase';
import 'firebase/firestore';

function Search(props) {
    const currentUser = props.user;

    const[add, setAdd] = useState(false);

    function handleShow(){setAdd(true)}
    function handleClose(){setAdd(false)}

    function handleAdd(title, url, desc){
        const dataToUpload = {
            "title" : title,
            "url" : url,
            "desc" : desc
        }

        const db = firebase.firestore();
        db.collection(currentUser.user.uid).doc(url).set(dataToUpload)
        .then(()=>{alert('uploaded')})
        .catch(err=>{alert('failed')});

    }

    return (
        <div className={classes._Search}>
                <FormControl className={classes._input}type="text" placeholder="Search" />

                <Button 
                onClick={handleShow}
                variant="success"
                className={classes._addBtn}
                >Add</Button>

                <MyModal
                    title={'Add New Bookmark'}
                    show={add}
                    handleShow={handleShow}
                    handleClose={handleClose}
                    handleSubmit={handleAdd}
                />
        </div>
    )
}

export default Search
