import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../components/Card'
import Navbar from '../components/navbar'
import Footer from '../components/Footer';
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Doctors</title>
        <link rel="icon" href="/favicon.ico" />
        <Navbar />
      </Head>
      <Card />
      <Footer />
   </div>
  )
}

export default Home
