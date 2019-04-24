import { ADD_ARTICLE, GET_ARTICLE, DEL_ARTICLE, GET_ARTICLE_TOTAL } from '../action/type';

const initialState={
    articles: []
}

const article=(state=initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
        return {
            ...state,
            articles: [...state.articles, action.payload]
        }
        case GET_ARTICLE:
        return {
            ...state,
            articles: action.payload
        }
        case GET_ARTICLE_TOTAL:
        return {
            ...state,
            articles: action.payload
        }
        case DEL_ARTICLE:
        return {
            ...state,
            articles: [...state.articles.filter(article => article._id !== action.id)]
        }
        default:
            return state;
    }
}

export default article;


