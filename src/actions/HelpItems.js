import database from '../../firebase/firebase';

export const getHelpItem = (id) => ({
    type: 'GET_HELP_ITEM',
    id
});

export const startGetHelpItem = (id) => {
    return (dispatch) => {
        return database.ref(`helpItems/${id}`)
                .once('value')
                .then((snapshot) => {
                    dispatch(getHelpItem(snapshot.key));
                });
    }
};

export const getAllHelpItems = (helpItems) => ({
    type: 'GET_ALL_ITEMS',
    helpItems
});

export const startGetAllHelpItems = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/helpItems`)
                .once('value')
                .then((snapshot) => {
                    const helpItems = [];

                    snapshot.forEach((childSnapshot) => {
                        helpItems.push({
                            id: childSnapshot.key,
                            ...childSnapshot.val()
                        });
                    });
            dispatch(getAllHelpItems(helpItems))
        });
    };
};

export const addHelpItem = (helpItem) => 
({
    type: 'ADD_HELP_ITEM',
    helpItem
});

export const startAddHelpItem = (helpItemData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            fromDate = 0,
            toDate = 0,
            title = '',
            email = '',
            phone = ''
        } = helpItemData;

        const helpItem = { description, fromDate, toDate, title, email, phone };

        //Here we're returning promise to allow promise chaining in test methods
        return database.ref(`users/${uid}/helpItems`).push(helpItem).then((ref) => {
            dispatch(addHelpItem({
                id: ref.key,
                ...helpItem
            }));
        });
    };
};

export const editHelpItem = (helpItem) => ({
    type: 'EDIT_HELP_ITEM',
    helpItem
});

export const startEditHelpItem = (helpItem) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/helpItems/${helpItem.id}`)
            .update(helpItem, () => {
                dispatch(editHelpItem(helpItem));
            });
            
    };
};

export const deleteHelpItem = (id) => ({
    type: 'DELETE_HELP_ITEM',
    id
});

export const startDeleteHelpItem = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/helpItems/${id}`).remove().then(() => {
            dispatch(deleteHelpItem(id))
        });
    };
};
