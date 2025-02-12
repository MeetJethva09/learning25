import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form1() {

    const {register , handleSubmit} = useForm();
    
    const recieveData = (data)=>{
        console.log(data);
    }

  return (
    <div style={{padding:"20px"}}>
            <form onSubmit={handleSubmit(recieveData)}>
  <div class="form-group" >
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" {...register("name")} placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" {...register("password")} placeholder="Password" />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
