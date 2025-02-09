import React from 'react'

export const ArrayDemo = () => {
    let arr = [
        {
            name : "Vikram",
            age : 18
        },
        {
            name : "Raj",
            age : 20
        },
        {
            name : "Victus",
            age : 19
        }
    ]



  return (
    <div style={{'textAlign':'center'}}>
        {
            arr.map((users)=>{
                return <>
                <li>{users.name}</li>
                <li>{users.age}</li>
                </>
            })
        }
    </div>
  )
}
