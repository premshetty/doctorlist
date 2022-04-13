import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { doctorList } from '../Data/doctor.js'
import Navbar from './../components/navbar';
import Footer from './../components/Footer';
function DoctorProfile() {
    const router = useRouter()
    const id = router.query.doctor
    const CurrentDoctor = doctorList.filter(doctor => doctor.id == id)
    console.log(CurrentDoctor)
  return (
    <div className="mx-auto  w-full   bg-[#ffffff] shadow-xl 2xl:max-w-7xl">
      <Head>
        <title>{ CurrentDoctor[0]?.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Image
        src={CurrentDoctor[0]?.image}
        width={200}
        height={200}
        className="rounded-full"
      />
      <p>{CurrentDoctor[0]?.name}</p>
      <p>{CurrentDoctor[0]?.experience} </p>
      <p>{CurrentDoctor[0]?.speciality} </p>
      <p>{CurrentDoctor[0]?.address} </p>
      <p>{CurrentDoctor[0]?.phone} </p>
      <p>{CurrentDoctor[0]?.email} </p>
      <p>{CurrentDoctor[0]?.description} </p>
      <Footer />
    </div>
  )
}

export default DoctorProfile