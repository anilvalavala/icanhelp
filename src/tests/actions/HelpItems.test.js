import { 
    getHelpItem, 
    addHelpItem, 
    editHelpItem, 
    deleteHelpItem 
} from '../../actions/HelpItems';

test('Test getHelpItem action', () => {
    const result = getHelpItem('TEST');
    expect(result).toEqual({
        type: 'GET_HELP_ITEM',
        id: 'TEST'
    });
});

test('Test addHelpItem action', () => {
    const helpItem = {
        id: 1,
        description: 'test',
        fromDate: 123,
        toDate: 321,
        title: 'test',
        email: 'anilkumar.v@hotmail.com',
        phone: '9545947627'
    }
    const result = addHelpItem(helpItem);
    expect(result).toEqual({
        type: 'ADD_HELP_ITEM',
        helpItem
    });
});

test('Test editHelpItem action', () => {
    const helpItem = {
        id: 1,
        description: 'test',
        fromDate: 123,
        toDate: 321,
        title: 'test',
        email: 'anilkumar.v@hotmail.com',
        phone: '9545947627'
    }
    const result = editHelpItem(helpItem);
    expect(result).toEqual({
        type: 'EDIT_HELP_ITEM',
        helpItem
    });
});

test('Test deleteHelpItem action', () => {
    const result = deleteHelpItem(1);
    expect(result).toEqual({
        type: 'DELETE_HELP_ITEM',
        id: 1
    });
});