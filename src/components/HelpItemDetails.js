import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const HelpItemDetails = (props) => {
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
                        props.dispatch(deleteHelpItem(props.helpItem.id));
                    }
                }>Delete</button>
            </div>
        </div>
    );
}; 

export default HelpItemDetails;