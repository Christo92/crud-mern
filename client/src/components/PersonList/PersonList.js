import React from 'react';
import Create from '../Create/Create';
import PersonHandle from '../../HOC/PersonHandle';

function PersonList(props) {

    const { displayButtonDeleteAll, displayPersons } = props;

    return (
        <div className="personlist-container">
            <Create />
            {displayButtonDeleteAll()}
            <div className="personlist-container__block">
                {displayPersons()}
            </div>
        </div>
    )
}

export default PersonHandle(PersonList);