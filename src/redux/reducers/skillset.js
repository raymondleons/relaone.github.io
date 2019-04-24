import { ADD_SKILLSET, GET_SKILLSET, DEL_SKILLSET, GET_SKILLSET_TOTAL } from '../action/type';

const initialState={
    skillsets: []
}

const skillset=(state=initialState, action) => {
    switch (action.type) {
        case ADD_SKILLSET:
        return {
            ...state,
            skillsets: [...state.skillsets, action.payload]
        }
        case GET_SKILLSET:
        return {
            ...state,
            skillsets: action.payload
        }
        case GET_SKILLSET_TOTAL:
        return {
            ...state,
            skillsets: action.payload
        }
        case DEL_SKILLSET:
        return {
            ...state,
            skillsets: [...state.skillsets.filter(skillset => skillset._id !== action.id)]
        }
        default:
            return state;
    }
}

export default skillset;


