const getHelpItem = (id = '') => ({
    type: 'GET_HELP_ITEM',
    id
})

const addHelpItem = (
{
    id,
    description,
    fromDate,
    toDate,
    title,
    email,
    phone
}) => 
({
    type: 'ADD_HELP_ITEM',
    helpItem: {
        id,
        description,
        fromDate,
        toDate,
        title,
        email,
        phone
    }
});

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

export { getHelpItem, addHelpItem, editHelpItem, deleteHelpItem };