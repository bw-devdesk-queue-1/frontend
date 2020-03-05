import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editData } from '../actions';


const initialState = {
    title: '',
    description: '',
    tried: '',
    category: ''
}

const UpdateIssue = (props) => {
    console.log(props)
    const { match } = props
    const [edit, setEdit] = useState(initialState)

    const handleChanges = e => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    console.log(edit)

    const submitChanges = (id, edits) => {
        props.editData(id, edits)
        props.history.push(`/issues/${match.params.id}`)
    }

    console.log(match.params.id)
    return (
        <div>
            <form>
                <label htmlFor="title"></label>
                <input type="text" name="title" placeholder="title" onChange={handleChanges} />

                <label htmlFor="description"></label>
                <input type="text" name="description" placeholder="description" onChange={handleChanges} />

                <label htmlFor="tried"></label>
                <input type="text" name="tried" placeholder="tried" onChange={handleChanges} />

                <label htmlFor="category"></label>
                <select type="text" name="category" onChange={handleChanges}>
                    <option value="" defaultValue selected disabled hidden>Choose a Category</option>
                    <option value="Git">Git</option>
                    <option value="Express">Express</option>
                    <option value="React">React</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="General Javascript">General Javascript</option>
                    <option value="General Computer">General Computer</option>
                    <option value="Other">Other</option>
                </select>
                <button onClick={() => submitChanges(match.params.id, edit)}>Submit Changes</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        issues: [state.data]
    }
}


export default connect(mapStateToProps, { editData })(UpdateIssue);