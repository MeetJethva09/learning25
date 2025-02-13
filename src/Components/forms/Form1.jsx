import React from 'react'
import { useForm } from 'react-hook-form'


export default function Form1() {

    const {register , handleSubmit , formState:{errors}} = useForm();
    
    const recieveData = (data)=>{
        console.log(data);
    }
console.log(errors)
    const allValidators = {
      nameValidator :{
        required:{
          value:true ,
          message : "*Name is required"
        }
      },
      emailValildator : {
        required:{
          value:true ,
          message : "*Email is required"
        }
      },
      dobValildator : {
        required:{
          value:true ,
          message : "*DOB is required"
        }
      },
      contactValidator : {
        maxLength:{
            value : 10,
            message : "*Not valid Number.."
        }
      }
    }
  return (
    <div style={{padding:"20px"}}>
      <h2 style={{textAlign:"center" , textDecoration:"underline" , color:"blue"}}>Fill Your Details..</h2>
            <form onSubmit={handleSubmit(recieveData)}>

    <div class="form-group" >
    <label for="exampleInputEmail1" style={{fontWeight:"bold"}}>Enter Name : </label>
    <input type="name" class="form-control" {...register("name" , allValidators.nameValidator)} placeholder="Enter name" />
    <span style={{color:"red"}}>{errors.name ? errors.name.message :""}</span>
  </div>

  <div class="form-group" >
    <label for="exampleInputEmail1" style={{fontWeight:"bold"}}>Email address : </label>
    <input type="email" class="form-control" {...register("email" , allValidators.emailValildator)} placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    <span style={{color:"red"}}>{errors.email ?.message}</span>
  </div>

  <div class="form-group" >
    <label for="exampleInputEmail1" style={{fontWeight:"bold"}}>DOB : </label>
    <input type="date" class="form-control" {...register("DOB" , allValidators.dobValildator)} placeholder="DOB"/>
    <span style={{color:"red"}}>{errors.DOB ?.message}</span>
  </div>


  <div class="form-group" style={{marginTop:"10px"}}>
  <label for="exampleInputEmail1" style={{fontWeight:"bold"}}>Occupation : </label><br/>
   <select  {...register("occupation")}>
    <option value="Sel-Employee">Self-Employee</option>
    <option value="Business">Business</option>
    <option value="UN-Employee">Un-Employee</option>
    <option value="Student">Student</option>
   </select>
  </div>

  <label for="exampleInputPassword1" style={{fontWeight:"bold"}}>gender :</label><br />
    Male : <input type="radio"  {...register("gender")} value="male" name='gender'/><br/>
    Female : <input type="radio" {...register("gender")} value="female" name='gender'/>

  <div class="form-group" style={{marginTop:"10px"}}>
    <label for="exampleInputPassword1" style={{fontWeight:"bold"}}>Contact Number : </label>
    <input type="tel" class="form-control" {...register("mobno" , allValidators.contactValidator)} placeholder="Mob No." />
    <span style={{color:"red"}}>{errors.mobno ? errors.mobno.message : ""}</span>
  </div>

  <div class="form-group" >
  <label for="exampleInputPassword1" style={{fontWeight:"bold"}}>Home Address : </label><br/>
    <textarea name="" id="" placeholder='Enter Address....' {...register("address")} cols="44" style={{borderRadius:"8px"}}></textarea>

  </div>

  <div class="form-group">
    <label for="exampleInputPassword1" style={{fontWeight:"bold"}}>PAN : </label>
    <input type="text" class="form-control" {...register("PAN")} placeholder="PAN" />
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1" style={{fontWeight:"bold"}}>Adhar Number : </label>
    <input type="number" class="form-control" {...register("Adhar")} placeholder="Adhar" />
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1" style={{fontWeight:"bold"}}>Bank Name</label>
    <input type="text" class="form-control" {...register("bankname")} placeholder="Bank Name" />
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1" style={{fontWeight:"bold"}}>Enter Loan Amount</label>
    <input type="number" id="loan" class="form-control" {...register("loanamount")} placeholder="Loan Aomunt" />
  </div>


  <div class="form-group">
    <label for="exampleInputPassword1" style={{fontWeight:"bold"}}>Emi date</label>
    <input type="date" class="form-control" {...register("emidate")} placeholder="choose Emi date" />
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1" style={{fontWeight:"bold"}}>Tenure (Month)</label>
    <input type="number" id="tenure" class="form-control" {...register("tenure")} placeholder="Tenure in month" />
  </div>
  


  <div class="form-check">
    <input type="checkbox" class="form-check-input"checked id="exampleCheck1"  />
    <label class="form-check-label" for="exampleCheck1" >Charge may high Apply</label>
  </div>

  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1" >Terms And Consition Apply</label>
  </div><br />

  <button type="submit" class="btn btn-primary">Submit</button>
  <button type="reset" class="btn btn-warning" style={{marginLeft:"8px"}}>Reset</button>
</form>
    </div>
  )
}
