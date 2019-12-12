import React from 'react';
import axios from 'axios';

const DELETE_API_URL = '/api/person/delete/';

const DeleteHandleSubmit = WrappedComponent => {
    const DeleteHandleSubmit = (props) => {

        async function handleDelete() {
            try {
                await axios.get(`${DELETE_API_URL}${props.person._id}`)
            } catch (err) {
                console.log(err.message)
            }

            window.location.reload(false);
        }

        return (
            <WrappedComponent handleDelete={handleDelete} {...props} />
        )
    }

    return DeleteHandleSubmit;
}

export default DeleteHandleSubmit;