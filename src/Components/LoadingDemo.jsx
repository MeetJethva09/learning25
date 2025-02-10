import React , {useState} from 'react'

export default function LoadingDemo() {

    const [isLoading , setIsLoading] = useState(true);

    const stopLoading = ()=>{
        setIsLoading(false);
    }

  return (
    <div style={{textAlign:"center"}}>
        {/* <h1>Loading....</h1> */}
        {
            isLoading==true ? "Loadingg.." : ""
        }
        <br />
        <button onClick={()=>{stopLoading()}}>Stop</button>
    </div>
  )
}
