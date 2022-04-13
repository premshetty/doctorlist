import React from 'react'
import { doctorList } from '../Data/doctor.js'
import  Link  from 'next/link';
function Card() {
  const list = doctorList.map((doctor) => {
    return (
      <Link href={`/${doctor.id}`} >
        <div
          className="h-auto w-[95%] cursor-pointer bg-gray-300 shadow-xl hover:shadow-blue-300 sm:w-56"
          key={doctor.id}
        >
          <img src={doctor.image} alt="doctor" />
          <div className="p-5">
            <h3>{doctor.name}</h3>
            <p> Experience : {doctor.experience}</p>
            <p> speciality : {doctor.speciality}</p>
          </div>
        </div>
      </Link>
    )
  })
  return (
    <div className='flex flex-col justify-center items-center pb-8'>
      <input className='outline-none p-3 border-2 w-[90%] sm:w-56 border-[#00000025] rounded-lg my-5' placeholder='search Doctor ...' type="text" />
      <div className="flex flex-wrap justify-center gap-5">{list}</div>
    </div>
  )
}

export default Card
