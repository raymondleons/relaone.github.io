import { ADD_ORGANIZATION, GET_ORGANIZATION, DEL_ORGANIZATION, GET_ORGANIZATION_TOTAL } from '../action/type';

const initialState={
    organizations: []
}

const organization=(state=initialState, action) => {
    switch (action.type) {
        case ADD_ORGANIZATION:
        return {
            ...state,
            organizations: [...state.organizations, action.payload]
        }
        case GET_ORGANIZATION:
        return {
            ...state,
            organizations: action.payload
        }
        case GET_ORGANIZATION_TOTAL:
        return {
            ...state,
            organizations: action.payload
        }
        case DEL_ORGANIZATION:
        return {
            ...state,
            organizations: [...state.organizations.filter(organization => organization._id !== action.id)]
        }
        default:
            return state;
    }
}

export default organization;


