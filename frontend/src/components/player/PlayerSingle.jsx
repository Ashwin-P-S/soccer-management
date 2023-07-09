import axios from 'axios';
import React from 'react';


class PlayerSingle extends React.Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    deletePlayer = (event) => {
        const url = 'http://localhost:4000/players/' + this.props.player._id;
        axios.delete(url).then((response) => console.log(response)).catch((err) => console.log(err));
    }

    render() {
        return (
            <form className="card" action='/'>
                <div className="card-image">
                    <img src="soccer.jpeg" alt="Soccer" />
                    <span className="card-title">
                        {this.props.player.firstName} {this.props.player.lastName}
                    </span>
                </div>
                <div className="card-content">
                    Phone: {this.props.player.phone} - Email: {this.props.player.email}
                </div>
                <div className="card-action">
                    <button onClick={this.deletePlayer.bind(this)} name="action" className="btn-flat waves-effect waves-light material-icons">delete</button>
                    <button className="btn-flat waves-effect waves-light material-icons">edit</button>
                </div>
            </form>
        );
    }
}

export default PlayerSingle;