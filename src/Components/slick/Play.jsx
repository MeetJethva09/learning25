import React from 'react'
import { useParams } from 'react-router-dom'

export const Play = () => {

    const id = useParams().id;
  return (
    <div>


        <h2>Playing...{id}</h2>
    </div>
  )
}
