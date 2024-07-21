
import React,{useEffect, useState}from 'react'
import "./UpdatePlant.css"
import { useParams } from 'react-router-dom'
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';
import { Link } from 'react-router-dom';


function UpdatePlant() {
    const {id}=useParams();

    const [name,setName]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState("0")
    const [ description,setDescription]=useState("")

    const updateplant = async()=>{
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/Plant/${id}`,{
            name:name,
            category:category,
            price:price,
            description:description
        })
        toast.success(response.data.message)
    }
    const loadPlants = async ()=>{
        if(!id){
            return
        }
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/Plant/${id}`)


        const {name,category,price,description} =response.data.data
        
        setName(name)
        setCategory(category)
        setPrice(price)
        setDescription(description)
    }
    useEffect(()=>{
   
     loadPlants(id)
        
    },[id])

  return (
    <div className='plant-form'>

      <h1>UpdatePlant:{id}</h1><form >
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
        


        <button type='button' className='update-btn' onClick={updateplant}>Update</button>
      </form>
      <br></br>
      <Link to="/" className='back-home'>Back To home</Link>
<Toaster/>
    </div>
  )
}

export default UpdatePlant