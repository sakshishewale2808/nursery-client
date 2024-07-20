import React, { useEffect, useState } from 'react';
import "./Home.css";
import PlantCard from "./../../components/PlantCard/PlantCard";
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";

function Home() {
    const [plants, setPlants] = useState([]);

    const loadPlants = async () => {
        try {
            toast.loading("Loading plants...");
            const response = await axios.get('http://localhost:8000/plants');
            setPlants(response.data.data);
            toast.dismiss();
            toast.success("Plants loaded successfully");
        } catch (error) {
            toast.dismiss();
            toast.error("Failed to load plants");
            console.error("Error loading plants:", error);
        }
    };

    useEffect(() => {
        loadPlants();
    }, []); 

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
            <Toaster />
        </div>
    );
}

export default Home;
