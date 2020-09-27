import React from 'react'
import '../style/header.css'

function Header(props) {
    let t = props.time
    // let time = new Date().toLocaleTimeString() 
        setInterval(function(){ 
            let time = new Date().toLocaleTimeString()
                  
          props.setTime(time)
        },1000)
        



    return (
        <div>
    <p className="heder">Header</p>
    {/* <p>{props.time}</p> */}
    <p>{t}</p>
    </div>
    )
}
export default Header;

// setInterval(Header()
//      ,1000)
