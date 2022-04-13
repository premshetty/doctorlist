import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../components/Card'
import Navbar from '../components/navbar'
import Footer from '../components/Footer';
const Home: NextPage = () => {
  return (
    <div className='bg-[#ffffff]'>

      <div className="w-full  mx-auto   2xl:max-w-7xl bg-[#ffffff] shadow-xl">
        <Head>
          <title>Doctors</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Card />
        <Footer />
      </div>
    </div>
  )
}

export default Home
