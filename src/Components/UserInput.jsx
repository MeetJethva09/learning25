import React , {useState}from 'react'

export const UserInput = () => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [city , setCity] = useState("")
    const [age , setAge] = useState("")


  return (
    <div style={{textAlign:"center"}}>
        <h1>Provide Details...</h1>
       Name : <input type="text" placeholder='Enter Name' onChange={(event)=>{setName(event.target.value)}}/><br/>{name}<br />
       Email : <input type="text" placeholder='Enter Email' onChange={(event)=>{setEmail(event.target.value)}}/><br />{email}<br/>
       Password : <input type="text" placeholder='Enter password' onChange={(event)=>{setPassword(event.target.value)}}/> <br />{password}<br/>
       City : <input type="text" placeholder='Enter cityname' onChange={(event)=>{setCity(event.target.value)}}/><br />{city}<br/>
       Age : <input type="text" placeholder='Enter age' onChange={(event)=>{setAge(event.target.value)}}/><br/>{age}
    </div>
  )
}
