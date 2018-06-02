import React from 'react';
import { Link } from 'react-router-dom';

const HelpItemDetails = (props) => {
    return(
        <div>
            <div>
                <Link to={`/editHelp/${props.helpItem.id}`}> {props.helpItem.title} </Link> <br />
                Description: {props.helpItem.description} <br />
                Available From: {props.helpItem.fromDate} <br />
                Available Upto: {props.helpItem.toDate} <br />
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