import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/Auth';

export class Login extends React.Component {
    render() {
        return(
            <div className="box-layout">
                <div className="box-layout__box">
                    <p className="box-layout__title">
                        Only google login is available currently
                    </p>
                    <button className="box-layout__button" 
                        onClick={this.props.startLogin}>
                        Login with your Google account
                    </button>
                </div>
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