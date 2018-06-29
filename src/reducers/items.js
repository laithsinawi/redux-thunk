import { ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS } from '../actions/types';

export const itemsHasErrored = (state = false, action) => {
    switch(action.type) {
        case ITEMS_HAS_ERRORED:
            return action.hasErrored;   
        default:
            return state;            
    }
}

export const itemsIsLoading = (state = false, action) => {
    switch(action.type) {
        case ITEMS_IS_LOADING:
            return action.isLoading;
        default: 
            return state;
    }
}

export const items = (state = false, action) => {
    switch(action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            return action.items;
        default: 
            return state;
    }
}