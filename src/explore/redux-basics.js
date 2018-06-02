import { createStore } from 'redux';

const incrementCount = (payload = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
})

const store = createStore((state = {count: 0}, action) => {
    const incrementBy = action.incrementBy 
                        ? action.incrementBy
                        : 0
    switch(action.type)
    {
        case "INCREMENT":
            return{    
                count: state.count + incrementBy
            }
        case "DECREMENT":
            return{
                count: state.count - 1
            }
        case "RESET":
            return{
                count: 0
            }
        default:
            return state;
    }
});

store.dispatch(incrementCount({incrementBy: 5}));
console.log(store.getState());

store.dispatch({
    type: 'INCREMENT'
});
console.log(store.getState());

store.dispatch({
    type: "DECREMENT"
});
console.log(store.getState());
