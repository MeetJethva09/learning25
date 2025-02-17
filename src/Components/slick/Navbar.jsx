import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{padding:"5px"}}>
  <a class="navbar-brand" href="#" style={{fontWeight:"bold"}}>SlicK</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item " style={{fontWeight:"bold"}}>
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item" style={{fontWeight:"bold"}}>
        <Link class="nav-link" to="/shop">Shopping</Link>
      </li>
      <li class="nav-item" style={{fontWeight:"bold"}}>
        <Link class="nav-link" to="/form1">Form</Link>
      </li>
      <li class="nav-item" style={{fontWeight:"bold"}}>
        <Link class="nav-link" to="/term">T&C</Link>
      </li>
      <li class="nav-item" style={{fontWeight:"bold"}}>
        <Link class="nav-link" to="/apitest">Api</Link>
      </li>
     
    </ul>
  
  </div>
</nav>
    </div>
  )
}
