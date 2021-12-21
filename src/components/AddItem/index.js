import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import db from '../../utilities/firebase-config'
import { getItemsRequest, postItemsRequest, putItemsRequest } from '../../utilities/actions'
import './index.css'

function AddItem() {
    const [name, setName] = useState('')
    const [image, setImage] = useState('choose a file')
    const [price, setPrice] = useState('')
    const [count, setCount] = useState('')

    const {id} = useParams()

    const navigate = useNavigate()
    
    const dispatch = useDispatch()
    const items = useSelector(state => state.itemReducer.items)


    useEffect(() => {
        dispatch(getItemsRequest())
    }, [id])

    useEffect(() => {
       if(id){
        setName(items[id].name)
        setPrice(items[id].price)
        setCount(items[id].count)
       }
       else{
        setName('')
        setPrice('')
        setCount('')
       } 
    }, [id, items])

    const submitHandler = async(e) => {
        e.preventDefault();
        if( !name || image === 'choose a file' || !price || !count){
            toast.error("Please fill all details about the item")
        }else{
            let item = {
                name,
                image:'./assets/'+image,
                price,
                count
            }
            if(!id){
                dispatch(postItemsRequest(item))
                toast.success("Added successfully!")
            }
            else{
                dispatch(putItemsRequest(id,item))
                toast.success("Updated successfully!")

            }
            navigate('/')
        }
    }
    return (
        <form >
            <h3 className="text-center">{id?"Update Item ":"Add an Item "}</h3>
            <div>
                <label>
                    Name
                </label>
                <input type="text" value={name || '' } onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <div>
                <label>
                    Image
                </label>
                <input type="file" 
                 onChange={(e)=>{setImage(e.target.files[0].name)}}/>
            </div>
            <div>
                <label>
                    Price
                </label>
                <input type="text"
                value={price || '' } onChange={(e)=>{setPrice(e.target.value)}} />
            </div>
            <div>
                <label>
                    Count
                </label>
                <input type="text"
                value={count || '' } onChange={(e)=>{setCount(e.target.value)}} />
            </div>
        <button className='button' onClick={(e)=>{submitHandler(e)}}>{id?"Update":"Add"}</button>
        </form>
    )
}

export default AddItem
