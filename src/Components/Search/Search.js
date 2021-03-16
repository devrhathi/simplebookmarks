import React, {useState} from 'react'
import {FormControl, Button } from 'react-bootstrap'
import classes from './Search.module.css';
import MyModal from '../Modal/MyModal';

function Search() {
    const[add, setAdd] = useState(false);

    function handleShow(){setAdd(true)}

    function handleClose(){setAdd(false)}

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
                />
        </div>
    )
}

export default Search
