import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { startDeleteHelpItem } from '../actions/HelpItems';

export const HelpItemDetails = (props) => {
    return(
        <div>
            <div>
                <Link to={`/editHelp/${props.helpItem.id}`}> {props.helpItem.title} </Link> <br />
                Description: {props.helpItem.description} <br />
                Available From: {moment(props.helpItem.fromDate).format('MMMM Do, YYYY')} <br />
                Available Upto: {moment(props.helpItem.toDate).format('MMMM Do, YYYY')} <br />
                Email: {props.helpItem.email} <br />
                Phone: {props.helpItem.phone} <br />
                <button onClick={
                    () => {
                        props.dispatch(startDeleteHelpItem(props.helpItem.id));
                    }
                }>Delete</button>
            </div>
        </div>
    );
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        startDeleteHelpItem: (helpItem) => dispatch(startDeleteHelpItem(helpItem))
    }
};

export default connect(undefined, mapDispatchToProps)(HelpItemDetails);