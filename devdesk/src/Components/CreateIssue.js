import React, { useState } from 'react';
import { Divider } from '@material-ui/core';
import axios from 'axios';
import { postData } from '../actions'

const initialState = {
    title: '',
    description: '',
    tried: '',
    category: ''
}

const CreateIssue = () => {
    const [createIssue, setCreateIssue] = useState(initialState)

    const handleChanges = e => {
        setCreateIssue({
            ...createIssue,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <form>
                <label htmlFor="title"></label>
                <input type="text" name="title" onChange={handleChanges} />
                <label htmlFor="description"></label>
                <input type="text" name="description" onChange={handleChanges} />
                <label htmlFor="tried"></label>
                <input type="text" name="tried" onChange={handleChanges} />
                <label htmlFor="category"></label>
                <input type="text" name="category" onChange={handleChanges} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateIssue;