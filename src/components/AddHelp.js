import React from 'react';
import { connect } from 'react-redux';
import HelpForm from './HelpForm';
import { startAddHelpItem } from '../actions/HelpItems';

export class AddHelp extends React.Component {
    onSubmit = (helpItem) => {
        this.props.startAddHelpItem(helpItem);
        this.props.history.push('/');
    };
    render(){
        return(
            <div>
                Add Help
                <HelpForm onSubmit={this.onSubmit} />
            </div>
        );
    };
}

// const AddHelp = (props) => {
//     return(
//         <div>
//         Add Help
//         <HelpForm onSubmit={(helpItem) => {
//             //The below line of code makes testing difficult
//             //Because addHelpItem is a dependency from another component
//             //props.dispatch(addHelpItem(helpItem));
//             props.onSubmit(helpItem)
//             props.history.push('/');
//         }}/>
//         </div>
//     );
// };

const mapDispatchToProps = (dispatch) => {
    return {
        startAddHelpItem: (helpItem) => dispatch(startAddHelpItem(helpItem))
    };
};


//When we do not have anything to connect from state to props but still we might need access to dispatch
//In this scenario we will use below syntax, connect without params
//export default connect()(AddHelp);

//connect has two params
//mapStateToProps - helps to attach state to props object, to consume in unconnected component
//mapDispatchToProps - helps to attach functions to props that can be used to dispatch actions
//mapDispatchToProps helps to abstract out dispatch calls from unconnected components
export default connect(undefined, mapDispatchToProps)(AddHelp);