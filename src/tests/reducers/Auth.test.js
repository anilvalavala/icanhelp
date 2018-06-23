import AuthReducer from '../../reducers/Auth';

test('Test Auth reducer for login case', () => {
    const action = {
        type: 'LOGIN',
        uid: 'ANIL'
    };
    expect(AuthReducer({}, action)).toEqual({uid: "ANIL"});
});

test('Test Auth reducer for logout case', () => {
    const action = {
        type: 'LOGOUT'
    };
    expect(AuthReducer({}, action)).toEqual({});
});