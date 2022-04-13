import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { doctorList } from '../Data/doctor.js'
import Navbar from './../components/navbar'
import Footer from './../components/Footer'
function DoctorProfile() {
  const router = useRouter()
  const id = router.query.doctor
  const CurrentDoctor = doctorList.filter((doctor) => doctor.id == id)
  console.log(CurrentDoctor)
  return (
    <div className="mx-auto  w-full   bg-[#ffffff] shadow-xl 2xl:max-w-7xl">
      <Head>
        <title>{CurrentDoctor[0]?.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="flex flex-col justify-center py-10 md:flex-row">
        <div className="flex w-full flex-col items-start justify-around p-5 md:w-1/4">
          <Image
            src={CurrentDoctor[0]?.image}
            width={200}
            height={200}
            className="rounded-full"
          />
          <p className="text-2xl font-bold ">{CurrentDoctor[0]?.name}</p>
          <p className="text-lg font-semibold">
            Experience : {CurrentDoctor[0]?.experience}{' '}
          </p>
          <p className="text-lg font-semibold">
            Speciality : {CurrentDoctor[0]?.speciality}{' '}
          </p>
          <p className="text-lg font-semibold">
            Adress : {CurrentDoctor[0]?.adress}{' '}
          </p>
          <p className="text-lg font-semibold">
            Phone : {CurrentDoctor[0]?.phone}{' '}
          </p>
          <p className="text-lg font-semibold">
            Email : {CurrentDoctor[0]?.email}{' '}
          </p>
        </div>
        <div className="w-full p-10 md:w-2/4  md:p-2">
          {CurrentDoctor[0]?.description.map((p) => (
            <p className="pb-3"> {p}</p>
          ))}{' '}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DoctorProfile
