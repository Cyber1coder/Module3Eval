import React from 'react'

const Navbar = ({search,setSearch,filter,setFilter,parking,setParking}) => {
  return (
    <div>
      <div>
        <input type='text' placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <select value = {filter} onChange={(e)=>setFilter(e.target.value)} >
        <option value = "">All</option>
        <option value ="Rajasthani">Rajasthani</option>
        <option value ="Gujarati">Gujarati</option>
        <option value ="Mughlai">Mughlai</option>
        <option value ="Jain">Jain</option>
        <option value ="Thai">Thai</option>
        <option value ="North Indian">North Indian</option>
        <option value ="South Indian">South Indian</option>
        </select>

        <select value = {parking} onChange={(e)=>setParking(e.target.value)} >
            <option value = "Parking Yes">Parking Yes</option>
            <option value = "Parking No">Parking No</option>
        </select>


        
      </div>
    </div>
  )
}

export default Navbar
