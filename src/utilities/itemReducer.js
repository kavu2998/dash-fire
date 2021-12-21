import {GET_ITEMS_SUCCESS} from './actions'

const itemReducer = (state = {items : []}, action ) => {
   // console.log(action.items,"at reducer")
    switch(action.type){
        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                items: action.items
            }
        default:
            return state
    }
}

export default itemReducer