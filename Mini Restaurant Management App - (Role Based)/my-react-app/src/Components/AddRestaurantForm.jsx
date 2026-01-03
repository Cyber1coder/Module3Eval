import React, { useState } from 'react'

const AddRestaurantForm = () => {

    const[name,setName] = useState("")
    const [address, setAddress] = useState("")
    const [type, setType] = useState("Rajasthani")
    const [parking, setParking] = useState(true)

    const handleStuff= () =>{
        if(!name || !address){
            alert("Fill all fields");
            return
        }

        const data = getRestaurants();

        const newItem = {
                restaurantName: name,
                address: address,
                type: type,
                parkingLot: true,
                image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
            }



        }
    }
    
  return (
    <div>
      <h3>Add Restaurants</h3>

    </div>
  )


export default AddRestaurantForm
