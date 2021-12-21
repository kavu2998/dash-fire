import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineNoteAdd} from 'react-icons/md'

function Header() {
    return (
        <div style={
            {backgroundColor:'grey', 
            color:'white', 
            alignItems:'center',
            textAlign:'center',
            display:'flex', 
            flexDirection:'row',
            justifyContent:'space-between',
            height:'50px'}}>
            <div style={{marginLeft:'10px', fontSize:'24px'}}>
                <Link to="/" style={{color:"white",textDecoration:'none'}}> Dashboard </Link>
            </div>
            <div style={{marginRight:'10px'}}>
                <Link to="/add"> <MdOutlineNoteAdd style={{fontWeight:"bold", color:"white", fontSize:"22px"}}/> </Link>

            </div>
        </div>
    )
}

export default Header
