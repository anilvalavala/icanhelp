import uuid from 'uuid';

const helpItemsReducer = (state = [{}], action) => {
    switch(action.type){
        case 'GET_HELP_ITEM':
            return state.filter(item => item.id === action.id);
        case 'ADD_HELP_ITEM':
            return [
                ...state,
                action.helpItem
            ];
        case 'EDIT_HELP_ITEM':
            return state.map((helpItem) => {
                if(helpItem.id == action.helpItem.id)
                {
                    return {
                        helpItem,
                        ...action.helpItem
                    }
                }else{
                    return helpItem;
                }
            });
        case 'DELETE_HELP_ITEM':
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}

export default helpItemsReducer;