import axios from 'axios';
import React from 'react';

class PlayerForm extends React.Component {

    submitPlayer(event) {
        axios.post('http://localhost:4000/players', {
            firstName: document.formKey.firstName.value,
            lastName: document.formKey.lastName.value,
            email: document.formKey.email.value,
            phone: document.formKey.phone.value,
        })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <form className="card col s8" name="formKey" action="/" onSubmit={this.submitPlayer.bind(this)}>
                <h5>Register Player</h5>
                <div>
                    <div className="input-field col s6">
                        <input id="firstName" type="text" />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="lastName" type="text" />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div>
                    <div className="input-field col s6">
                        <input id="phone" type="text" />
                        <label htmlFor="phone">Mobile</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="email" type="text" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row col">
                    <button className="btn waves-effect waves-light" name="action" type="submit">Add Player</button>
                </div>
            </form>
        );
    }
}

export default PlayerForm;