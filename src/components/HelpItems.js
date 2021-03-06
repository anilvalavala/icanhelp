import React from 'react';
import { connect } from 'react-redux';
import HelpItemDetails from './HelpItemDetails';
import filteredHelpItems from '../selectors/HelpItems';

//we are exporting unconnected version also to allow testing this component
export const HelpItems = (props) => {
    return(
        <div>
        {
            props.helpItems.length === 0 ? (
                <p>No Help Items Found</p>
            ) : (
                <div>
                <h1>Help Items</h1>
                {
                    props.helpItems.map(
                        (helpItem) => (
                            <div key={helpItem.id}>
                                <HelpItemDetails 
                                    helpItem={helpItem}
                                />
                                <br />
                            </div>
                        )
                    )
                }
                </div>
            )
        }
        </div>
    );
};

const mapStateToProps = (state) => ({
    helpItems: filteredHelpItems(state.helpItems, state.filters)
});

export default connect(mapStateToProps)(HelpItems);