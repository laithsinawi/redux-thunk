import axios from 'axios';

import { ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS } from './types';

export const itemsHasErrored = bool => ({
    type: ITEMS_HAS_ERRORED,
    hasErrored: bool
});

export const itemsIsLoading = bool => ({
    type: ITEMS_IS_LOADING,
    isLoading: bool
});

export const itemsFetchDataSuccess = items => ({
    type: ITEMS_FETCH_DATA_SUCCESS,
    items
});

export const itemsFetchData = url => {
    return(dispatch) => {

        dispatch(itemsIsLoading(true));

        axios.get('http://5b356e716005b00014c5dc00.mockapi.io/items')
            .then(res => {
                const items = res.data;
                // console.log(typeof (res.data), res.data );
                dispatch(itemsIsLoading(false));
                dispatch(itemsFetchDataSuccess(items));
            })
            .catch( () => {
                console.log('itemFetchData error')
            })
            
    }
}