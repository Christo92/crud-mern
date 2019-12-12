import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

import EditHandleSubmit from '../../HOC/EditHandleSubmit';

function Edit(props) {

    const {
        handleSubmit,
        personName,
        handlePersonName,
        personNickName,
        handlePersonNickname,
        personDescription,
        handlePersonDescription
    } = props;

    return (
        <div className="edit-container">
            <h3 className="edit-container__title">Update person</h3>
            <form className="edit-container__form" onSubmit={handleSubmit}>

                <div className="edit-container__form-group">
                    <label className="edit-container__label">Person Name:</label>
                    <input
                        type="text"
                        className="edit-container__input"
                        value={personName}
                        onChange={handlePersonName}
                    />
                </div>

                <div className="edit-container__form-group">
                    <label className="edit-container__label">Person Nickname:</label>
                    <input
                        type="text"
                        className="edit-container__input"
                        value={personNickName}
                        onChange={handlePersonNickname}
                    />
                </div>

                <div className="edit-container__form-group">
                    <label className="edit-container__label">Person Description:</label>
                    <input
                        type="text"
                        className="edit-container__input"
                        value={personDescription}
                        onChange={handlePersonDescription}
                    />
                </div>
                <div className="edit-container__form-group">
                    <input
                        className="edit-container__submit"
                        type="submit"
                        value="Update person"
                    />
                </div>
            </form>
        </div>
    )
}

Edit.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    }),
}

export default EditHandleSubmit(Edit);