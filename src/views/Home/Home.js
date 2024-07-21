import React from 'react';
import "./Home.css";
import  {useEffect,useState} from 'react';
import PlantCard from "./../../components/PlantCard/PlantCard";
import axios from 'axios';
import toast ,{Toaster} from "react-hot-toast";
function Home() {

    const [plants,setPlants]=useState([])

    const loadPlants=async ()=>{
        toast.loading("loading plants......")
        const response = await axios.get('http://localhost:8000/plants')
        toast.dismiss()
        toast.success("plants loaded successfully")
        setPlants(response.data.data)

    }
    useEffect(()=>{
        loadPlants()
    })
    

    return (
        <div>
            <h1>Plants</h1>
            <div className="plant-container">
                {plants.map((plant, i) => {
                    const {
                        name,
                        category,
                        image,
                        price,
                        description
                    } = plant;
                    return (
                        <PlantCard
                            key={i}
                            name={name}
                            category={category}
                            image={image}
                            price={price}
                            description={description}
                        />
                    );
                })}
            </div>
        </div>
    );
}
<Toaster/>
export default Home;
