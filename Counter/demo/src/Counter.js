import './Conter.css'
import { useState } from 'react'
function Counter()
{
    const [value,setvalue]= useState(0)
    return(
        <div className='main'>
            
            <h1>COUNTER</h1>
            <p>{value}</p>

            
            <button onClick={()=>{setvalue(value-1)}}  disabled={value==0} className='first'>DECREMENT</button>
            <button onClick={()=>{setvalue(0)}} className='second'>RESET</button>
            <button onClick={()=>{setvalue(value+1)}} className='third'>INCREMENT</button>
            <br></br><br></br><br></br>
        </div>
    )
}

export default Counter;