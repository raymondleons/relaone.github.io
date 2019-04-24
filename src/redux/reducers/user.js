import { GET_USERS, ADD_USER, DEL_USER, GET_USER_TOTAL } from '../action/type';

const initialState={
    users: []
}

const user=(state=initialState, action) => {
    switch (action.type) {
        case ADD_USER:
        return {
            ...state,
            users: [...state.users, action.payload]
        }
        case GET_USERS:
        return {
            ...state,
            users: action.payload
        }
        case GET_USER_TOTAL:
        return {
            ...state,
            users: action.payload
        }
        case DEL_USER:
        return {
            ...state,
            users: [...state.users.filter(user => user._id !== action.id)]
        }
        default:
            return state;
    }
}

export default user;


