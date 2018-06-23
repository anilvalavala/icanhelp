import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/Auth';

export class Login extends React.Component {
    render() {
        return(
            <div>
                <button onClick={this.props.startLogin}>Login</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        startLogin: () => dispatch(startLogin())
    }
};

export default connect(undefined, mapDispatchToProps)(Login);