import { createStore } from 'redux'

let defaultState = {
    user: {
        username: 'peteranh',
        password: '123456',
    }
}

function counterReducer(state = defaultState, action) {
    let newState = { ...state };
    switch (action.type) {
        case 'change-user':
            newState.user = action.user;
            break;
        default:
            break;
    }
    return newState;
}

// create store
let store = createStore(counterReducer)
store.subscribe(()=>{
    console.log(store.getState());
})

// default state
console.log('default', store.getState());

// dispatch action
let action = {
    type: 'change-user',
    user: {
        username: 'hongtruc',
        password: 'abcdef',
    }
}
store.dispatch(action);
// new state
console.log('new', store.getState());
