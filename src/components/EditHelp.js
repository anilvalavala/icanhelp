import React from 'react';
import { connect } from 'react-redux';
import { startEditHelpItem } from '../actions/HelpItems';
import HelpForm from './HelpForm';

export class EditHelp extends React.Component {
    
    onSubmit = (helpItem) => {
        this.props.startEditHelpItem(helpItem);
        this.props.history.push('/home');
    };
    render(){
        return(
            <div>
            <HelpForm 
                helpItem={this.props.helpItem}
                onSubmit={this.onSubmit} />
        </div>
        );
    };
}

// const EditHelp = (props) => {
//     return(
//         <div>
//             <HelpForm 
//                 helpItem={props.helpItem}
//                 onSubmit={(helpItem) => {
//                     props.dispatch(editHelpItem(helpItem));
//                     props.history.push('/');
//             }} />
//         </div>
//     );
// };

const mapStateToProps = (state, props) => {
    return({
        helpItem: state.helpItems.find((helpItem) => {
            return helpItem.id === props.match.params.id
        })
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        startEditHelpItem: (helpItem) => dispatch(startEditHelpItem(helpItem))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditHelp);