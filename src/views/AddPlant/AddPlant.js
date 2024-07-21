import React, { useState } from 'react'
import "./AddPlant.css"
import toast,{Toaster} from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AddPlant() {
    const [name,setName]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState("0")
    
    const [ description,setDescription]=useState("")

    const addPlant = async()=>{
        toast.loading("Adding plant...")
        if(!name || !category||!price||!description){
            toast.error("please Enter all details")
            return
        }
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/Plant`,{
            name:name,
            category:category,
            price:price,
           
            description:description
        })
        toast.dismiss()
        toast.success(response.data.message)

        setName("")
        setCategory("")
        setPrice("")
        
        setDescription("")
        

        
    }
  return (
    <div className='plant-form'>
      <h1 className='title-plant'>AddPlant🪴</h1>
      <form >
        <input type='text'
        placeholder='Enter plant name'
        value ={name}
        onChange={(e)=>setName(e.target.value)}
        className='plant-input'
        />
        <input type='text'
        placeholder='Enter plant category'
        value ={category}
        onChange={(e)=>setCategory(e.target.value)}
        className='plant-input'
        />
        <input type='number'
        placeholder='Enter plant price'
        value ={price}
        onChange={(e)=>setPrice(e.target.value)}
        className='plant-input'
        />
         <input type='text'
        placeholder='Enter plant description'
        value ={description}
        onChange={(e)=>setDescription(e.target.value)}
        className='plant-input'
        />
        


        <button type='button' onClick={addPlant} className='add-btn'>AddPlant</button>
      </form>
      <br/>
      <Link to="/" className='back-home'>Back To home</Link>
      <Toaster/>
    </div>
  )
}

export default AddPlant