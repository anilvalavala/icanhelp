import configureMockStore from 'redux-mock-store';
import moment from 'moment';
import thunk from 'redux-thunk';
import { 
    getHelpItem, 
    getAllHelpItems,
    addHelpItem, 
    editHelpItem, 
    deleteHelpItem,
    startAddHelpItem,
    startGetHelpItem,
    startGetAllHelpItems,
    startDeleteHelpItem,
    startEditHelpItem
} from '../../actions/HelpItems';
import database from '../../../firebase/firebase';
import TestHelpItems from '../fixtures/TestHelpItems';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const newHelpItems = {};
    TestHelpItems.forEach(({ id, title, description, fromDate, toDate, email, phone }) => {
        newHelpItems[id] = { title, description, fromDate, toDate, email, phone }
    })
    database.ref(`users/${uid}/helpItems`).set(newHelpItems).then(() => done());
});

const uid = "testuid";

test('Test getHelpItem action', () => {
    const result = getHelpItem('TEST');
    expect(result).toEqual({
        type: 'GET_HELP_ITEM',
        id: 'TEST'
    });
});

test('Test asynchronous startGetHelpItem action', (done) => {
   const mockStore = createMockStore({ auth: { uid } });
    mockStore.dispatch(startGetHelpItem('1')).then(() => {
        const actions = mockStore.getActions();
        expect(actions[0]).toEqual({
            type: 'GET_HELP_ITEM',
            id: '1'
        });
        done();
    });
});

test('Test getAllHelpItems action', () => {
    const result = getAllHelpItems(TestHelpItems);
    expect(result).toEqual({
        type: 'GET_ALL_ITEMS',
        helpItems: TestHelpItems
    });
})

test('Test asynchronous startGetAllHelpItems action', (done) => {
    const mockStore = createMockStore({ auth: { uid }});
    mockStore.dispatch(startGetAllHelpItems()).then(() => {
        const actions = mockStore.getActions();
        expect(actions[0]).toEqual({
            type: 'GET_ALL_ITEMS',
            helpItems: TestHelpItems
        });
        done();
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

test('Test asynchronous startAddHelpItem action', (done) => {
    const mockStore = createMockStore({ auth: { uid }});

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

        return database.ref(`users/${uid}/helpItems/${actions[0].helpItem.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(newHelpItem);
        done();
    });
})

test('Test editHelpItem action', () => {
    const result = editHelpItem(TestHelpItems[1]);
    expect(result).toEqual({
        type: 'EDIT_HELP_ITEM',
        helpItem: TestHelpItems[1]
    });
});

test('Test asynchronous startEditHelpItem action', () => {
    const mockStore = createMockStore({ auth: {uid} });
    const editedHelpItem = {
        id: '2',
        title: 'books',
        description: 'U.K.G books', 
        fromDate: moment(0).add(1, 'days').valueOf(), 
        toDate: moment(0).add(3, 'days').valueOf(), 
        email: 'anilkumar.v@hotmail.com',
        phone: '9545947627'
    }
    mockStore.dispatch(startEditHelpItem(editedHelpItem)).then(() => {
        const actions = mockStore.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_HELP_ITEM',
            helpItem: editedHelpItem
        });
    });
});

test('Test deleteHelpItem action', () => {
    const result = deleteHelpItem(1);
    expect(result).toEqual({
        type: 'DELETE_HELP_ITEM',
        id: 1
    });
});

test('Test asynchronous startDeleteHelpItem action', (done) => {
    const mockStore = createMockStore({ auth: { uid } });
    const itemToDelete = '1';
    mockStore.dispatch(startDeleteHelpItem(itemToDelete)).then(() => {
        const actions = mockStore.getActions();
        
        expect(actions[0]).toEqual({
            type: 'DELETE_HELP_ITEM',
            id: itemToDelete
        });
        done();
    });
});