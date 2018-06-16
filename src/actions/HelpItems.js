import database from '../../firebase/firebase';

const getHelpItem = (id = '') => ({
    type: 'GET_HELP_ITEM',
    id
})

const addHelpItem = (helpItem) => 
({
    type: 'ADD_HELP_ITEM',
    helpItem
});

const startAddHelpItem = (helpItemData = {}) => {
    return (dispatch) => {
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
        return database.ref('helpItems').push(helpItem).then((ref) => {
            dispatch(addHelpItem({
                id: ref.key,
                ...helpItem
            }));
        });
    };
};

const editHelpItem = (
    helpItem  
) => ({
    type: 'EDIT_HELP_ITEM',
    helpItem
});

const deleteHelpItem = (id) => ({
    type: 'DELETE_HELP_ITEM',
    id
});

export { 
    getHelpItem, 
    addHelpItem, 
    editHelpItem, 
    deleteHelpItem, 
    startAddHelpItem 
};