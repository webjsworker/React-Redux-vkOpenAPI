import React from 'react'
import '../style/message.css'

function Message(props) {
    function hendlWrite(event) {
        let value = event.target.value
        props.setValue(value)
    }
    const message = props.all_message
const order = message.map((element) => 
<div>
<p > - </p>
<p className="il">{element}</p>

</div>
)

    function setMessage() {
        
        let t = props.value
        const Obj = props.all_message
        if (t) { Obj.push(props.value)
        const value = ''
        props.setValue(value)}
       
    }

    return (
        <div className="message">
            <p>Set you messages </p>

            <textarea value={props.value} onChange={hendlWrite}></textarea>
            <button onClick={setMessage}>Send</button>
            <p>{order}</p>
        </div>
    )
}
export default Message;