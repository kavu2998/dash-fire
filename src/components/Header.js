import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineNoteAdd} from 'react-icons/md'

function Header() {
    return (
        <div className="shadow-sm p-3 mb-5  rounded bg-gradient-info"
        style={
            {backgroundColor:'#77c7c9', 
            color:'white', 
            alignItems:'center',
            textAlign:'center',
            display:'flex', 
            flexDirection:'row',
            justifyContent:'space-between',
            height:'50px'}}>
            <div style={{marginLeft:'10px', fontSize:'24px'}}>
                <Link to="/" style={{color:"black", fontWeight:"bold", textDecoration:'none'}}> Dashboard </Link>
            </div>
            <div style={{marginRight:'10px'}}>
                <Link to="/add"> <MdOutlineNoteAdd style={{fontWeight:"bold", color:"black", fontSize:"22px"}}/> </Link>

            </div>
        </div>
    )
}

export default Header
