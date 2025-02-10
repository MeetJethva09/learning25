import React , {useState}from "react";

export const UseSDemo  = () =>{

    const [count , setCount] = useState(0);

   const increaseCount = ()=>{
        setCount(count+1)
   }

    return (
        <div style={{textAlign : "center"}}>
            <h1>Hello Usestate example</h1>
            <h2>count  : {count}</h2>
            <button onClick={()=>{increaseCount()}}>Click</button>
        </div>
    )
}