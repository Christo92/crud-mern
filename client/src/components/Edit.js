import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class Edit extends Component {

    state = {
        personName: '',
        personNickName: '',
        personDescription: ''
    };

    async componentDidMount() {
        try {
            const editPerson = await axios.get(`/api/person/edit/${this.props.match.params.id}`);
            let editPersonData = editPerson.data;

            this.setState({
                personName: editPersonData.personName,
                personNickName: editPersonData.personNickName,
                personDescription: editPersonData.personDescription
            });

        } catch (err) {
            console.error(err.message)
        }
    }

    handlePersonName = (e) => {
        this.setState({
            personName: e.target.value
        })
    };

    handlePersonNickname = (e) => {
        this.setState({
            personNickName: e.target.value
        })
    };

    handlePersonDescription = (e) => {
        this.setState({
            personDescription: e.target.value
        })
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const obj = {
            personName: this.state.personName,
            personNickName: this.state.personNickName,
            personDescription: this.state.personDescription
        };

        try {
            await axios.post(`/api/person/update/${this.props.match.params.id}`, obj);
        } catch (err) {
            console.log(err.message)
        }

        // After update go back to the list
        this.props.history.push('/create')
    }

    render() {
        return (
            <div className="edit-container">
                <h3 className="edit-container__title">Update person</h3>
                <form className="edit-container__form" onSubmit={this.handleSubmit}>

                    <div className="edit-container__form-group">
                        <label className="edit-container__label">Person Name:</label>
                        <input 
                            type="text"
                            className="edit-container__input"
                            value={this.state.personName}
                            onChange={this.handlePersonName}
                        />
                    </div>

                    <div className="edit-container__form-group">
                        <label className="edit-container__label">Person Nickname:</label>
                        <input 
                            type="text"
                            className="edit-container__input"
                            value={this.state.personNickName}
                            onChange={this.handlePersonNickname}
                        />
                    </div>

                    <div className="edit-container__form-group">
                        <label className="edit-container__label">Person Description:</label>
                        <input 
                            type="text"
                            className="edit-container__input"
                            value={this.state.personDescription}
                            onChange={this.handlePersonDescription}
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
}

Edit.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired,
    history: PropTypes.object
}

export default Edit;