import { login, logout } from '../../actions/Auth';

test('Test login action', () => {
    const uid = 'anil';
    expect(login(uid)).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('Test logout action', () => {
    expect(logout()).toEqual({
        type: 'LOGOUT'
    })
});