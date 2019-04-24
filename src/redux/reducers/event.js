import { ADD_EVENT, GET_EVENT, DEL_EVENT, GET_EVENT_TOTAL } from '../action/type';

const initialState={
    events: []
}

const event=(state=initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
        return {
            ...state,
            events: [...state.events, action.payload]
        }
        case GET_EVENT:
        return {
            ...state,
            events: action.payload
        }
        case GET_EVENT_TOTAL:
        return {
            ...state,
            events: action.payload
        }
        case DEL_EVENT:
        return {
            ...state,
            events: [...state.events.filter(event => event._id !== action.id)]
        }
        default:
            return state;
    }
}

export default event;


