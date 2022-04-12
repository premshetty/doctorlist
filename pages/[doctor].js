import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { doctorList } from '../Data/doctor.js'
function DoctorProfile() {
    const router = useRouter()
    const id = router.query.doctor
    const CurrentDoctor = doctorList.filter(doctor => doctor.id == id)
    console.log(CurrentDoctor)
  return (
    <div>
        <p>{CurrentDoctor[0]?.name}</p>
        <Image src={CurrentDoctor[0]?.image} width={200} height={200} />
    </div>
  )
}

export default DoctorProfile