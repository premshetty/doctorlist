import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../components/Card'
import Navbar from '../components/navbar'
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <Navbar />
      </Head>
      <Card />

   </div>
  )
}

export default Home
