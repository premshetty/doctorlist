import React from 'react'
import { doctorList } from '../Data/doctor.js'
import Link from 'next/link'
function Card() {
  const list = doctorList.map((doctor) => {
    return (
      <Link href={`/${doctor.id}`} key={doctor.id}>
        <div className="h-auto w-[95%] cursor-pointer bg-gray-300 shadow-xl hover:shadow-blue-300 sm:w-56">
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
    <div className="flex flex-col items-center justify-center pb-8">
      <h1 className="py-10 text-center text-3xl font-bold">
        {' '}
        Top Doctors In Each Department{' '}
      </h1>
      <div className="flex flex-wrap justify-center gap-5">{list}</div>
    </div>
  )
}

export default Card
