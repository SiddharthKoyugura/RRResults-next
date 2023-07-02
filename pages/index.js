import AllSems from '@/components/Form/AllSems';
import SingleSem from '@/components/Form/SingleSem';
import Head from 'next/head';
import { useEffect, useState } from 'react'

export default function Home() {
  const [ data, setData ] = useState('');

  useEffect(()=>{
    fetch("http://localhost:3001/api/home")
    .then((res)=>res.json())
    .then((response)=>setData(response.message))
  }, [data]);

  return (
    <div>
      <Head>
        <title>RRResults</title>
      </Head>

      <SingleSem />
      <h1 className="note w-fit mx-auto">(OR)</h1>
      <AllSems />
    </div>
  )
}
