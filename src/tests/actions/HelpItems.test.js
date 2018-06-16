import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    getHelpItem, 
    addHelpItem, 
    editHelpItem, 
    deleteHelpItem,
    startAddHelpItem
} from '../../actions/HelpItems';
import database from '../../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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

test('Test asynchronous add help item', (done) => {
    const mockStore = createMockStore({});

    const newHelpItem = {
        description: 'From asynchronous unit test',
        fromDate: 12121212,
        toDate: 2121212121,
        title: 'Test',
        email: 'test@test.com',
        phone: '9545947627'
    };

    mockStore.dispatch(startAddHelpItem(newHelpItem)).then(() => {
        const actions = mockStore.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_HELP_ITEM',
            helpItem: {
                id: expect.any(String),
                ...newHelpItem
            }
        });

        return database.ref(`helpItems/${actions[0].helpItem.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(newHelpItem);
        done();
    });
})

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