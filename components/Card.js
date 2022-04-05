import React from 'react'
import { doctorList } from '../Data/doctor.js'
function Card() {
  const list = doctorList.map((doctor) => {
    return (
      <div className="h-auto w-56 bg-gray-300 shadow-xl" key={doctor.id}>
        <img src={doctor.image} alt="doctor" />
        <div className="p-5">
          <h3>{doctor.name}</h3>
          <p> Experience : {doctor.experience}</p>
          <p> speciality : {doctor.speciality}</p>
        </div>
      </div>
    )
  })
  return (
    <div className='flex flex-col justify-center items-center'>
      <input className='outline-none p-3 border-2 w-[80%] md:w-1/4 border-[#00000025] rounded-lg my-5' placeholder='search Doctor ...' type="text" />
      <div className="flex flex-wrap justify-center gap-5">{list}</div>
    </div>
  )
}

export default Card
