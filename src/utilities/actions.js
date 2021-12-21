import db from './firebase-config'

export const GET_ITEMS_FETCH = 'GET_ITEMS_FETCH'
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'

export const getItemsFetch = () => ({
    type : GET_ITEMS_FETCH
});

export const getItemsSuccess = (items) => ({
    type : GET_ITEMS_SUCCESS, 
    items
})

export const getItemsRequest = () => {
    return function(dispatch){
        db.child('items').on("value",(snapshot) => {
            if(snapshot.val()!==null){
                dispatch(getItemsSuccess({...snapshot.val()}))
            }else{
                console.log("null")
            }
        }) 
    }
}

export const postItemsRequest = (item) => {
    return function(dispatch){
        db.child('items').push(item, (err)=>{
            if(err){
                console.log("error",err)
            }
            else{
                getItemsRequest()
            }
        })
    } 
}

export const deleteItemsRequest = (id) => {
    return function(dispatch){
        db.child(`items/${id}`).remove((err)=>{
            if(err){
                console.log("Delete probs")
            }else{
                getItemsRequest()
            }
        })
    } 
}

export const putItemsRequest = (id,item) => {
    return function(dispatch){
        db.child(`items/${id}`).set(item,(err)=>{
            if(err){
                console.log("error",err)
            }
            else{
                getItemsRequest()
            }
        })
    }
}