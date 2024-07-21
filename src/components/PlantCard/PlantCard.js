import React from 'react'
import "./PlantCard.css"
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

function PlantCard({ _id,name,category,price,description,loadPlants }) {

  const  deletePlant = async(PlantId)=>{
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/Plant/${PlantId}`)
    toast.success(response.data.message)
    loadPlants()

  }
  return (
    <div className='plant-card'>
      <h1 className='plant-title'>{name}</h1>
      <p className='plant-price'>price:{price}</p>
      <p>{category}</p>
      <p className='des'>{description}</p>
      
    
      
      <div>
        <Link type='button' className='plant-card-action-btn'to={`/Update/${_id}`}>Edit</Link>

        <button type='button'  
        className='plant-card-action-btn' 
        onClick={()=>{
          deletePlant(_id)
     }}>
      Delete</button>
      </div>
      
    </div>
  
  )
}

export default PlantCard