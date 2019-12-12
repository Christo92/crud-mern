import React from 'react';

import CreateHandleSubmit from '../../HOC/CreateHandleSubmit';

/*
Here is the create form :
- name input
- nickname input
- description input
- submit input
*/

function Create(props) {

    const {
        handleSubmit,
        personName,
        handlePersonName,
        personNickName,
        handlePersonNickName,
        personDescription,
        handlePersonDescription
    } = props;

    return (
        <div className="create-container">
            <h3 className="create-container__title">Add new item</h3>

            <form className="create-container__form" onSubmit={handleSubmit}>

                <div className="create-container__form-group">
                    <label className="create-container__label">Add a name</label>
                    <input
                        type="text"
                        className="create-container__input"
                        value={personName}
                        onChange={handlePersonName}
                    />
                </div>

                <div className="create-container__form-group">
                    <label className="create-container__label">Add a nickname</label>
                    <input
                        type="text"
                        className="create-container__input"
                        value={personNickName}
                        onChange={handlePersonNickName}
                    />
                </div>

                <div className="create-container__form-group">
                    <label className="create-container__label">Add a description</label>
                    <input
                        type="text"
                        className="create-container__input"
                        value={personDescription}
                        onChange={handlePersonDescription}
                    />
                </div>

                <div className="create-container__form-group">
                    <input type="submit" value="Submit" className="create-container__submit" />
                </div>
            </form>
        </div>
    )
}

export default CreateHandleSubmit(Create);