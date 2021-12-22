import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getItemsRequest, deleteItemsRequest } from '../../utilities/actions'
import './index.css'

function Card() {
    useEffect(() => {
        dispatch(getItemsRequest())
    }, [])

    const dispatch = useDispatch()
    const items = useSelector(state => state.itemReducer.items)

    const deleteItem = (id) => {
        if(window.confirm("Are you sure you want to delete?")){
            dispatch(deleteItemsRequest(id))
        }
    }

    return (
        <div className="row">
            {
                Object.keys(items).map(id => {
                    return (
                        <div key={id} className="col col-md-3" >
                            <div className="card" style={{width:'400px', margin:'10px'}}>
                                <h5 className="card-header">{items[id].name}</h5>
                                <div className="card-body">
                                    <img src={items[id].image} className="card-img-top" style={{height:300}} alt="Sorry. No image available."/>
                                    <div className="same-row" style={{fontSize:'18px'}}>
                                        <div>Rs.{items[id].price}</div>
                                        <div>{items[id].count} left</div>
                                    </div>
                                    <div className="same-row">
                                        <button className="btn btn-info"><Link to={`/edit/${id}`} style={{textDecoration:"none"}}>Edit</Link></button>
                                        <button className="btn btn-danger" onClick={() => {deleteItem(id)}}>Delete</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
        }            
        </div>
    )
}

export default Card
