import { combineReducers } from 'redux';
import { itemsHasErrored, itemsIsLoading, items } from './items';

export default combineReducers({
    itemsHasErrored,
    itemsIsLoading,
    items
});