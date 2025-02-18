import axios from 'axios'


import React from 'react'
import { useState } from 'react'


export const Apitest =  () => {

    const [recieveData , setRecieveData] = useState("");
    const [userData , setUserData] = useState([]);

    const getData = async ()=>{
        const res = await axios.get("https://node5.onrender.com/user/user")
       
        console.log(res.data.message);
        console.log("whole data",res.data.data)
        setRecieveData(res.data.message);
        setUserData(res.data.data);
    }
  


  return (
    <div style={{textAlign:"center"}}>
        Api Testing...<br></br>
        <button onClick={()=>{getData()}}>Get</button>
        {
            <h2>{recieveData}</h2>
        }
          <table className='table table-light'>
            <thead>
                <th>Id</th>
                <th>name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Isactive</th>
            </thead>
            <tbody>

            {
                userData=="" ? "" :
                userData.map((user)=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>{user.isActive == true ? "Active" : ""}</td>
                            
                        </tr>
                })
            }
            

            </tbody>
          </table>
    </div>
  )
}
