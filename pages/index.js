import AllSems from '@/components/Form/AllSems';
import SingleSem from '@/components/Form/SingleSem';
import Head from 'next/head';
import { useEffect, useState } from 'react'

export default function Home() {
  // Results state
  const [ rollNumber, setRollNumber ] = useState("");
  const [ code, setCode ] = useState("");
  const [ singleSemData, setSingleSemData ] = useState({});

  useEffect(()=>{
    fetch(`http://localhost:3001/singleSem?rollNumber=${rollNumber}&sem=${code}`)
    .then((res)=>res.json())
    .then((response)=>{setSingleSemData(response); console.log(singleSemData);})
    .catch((err)=>console.error("error", err));
  }, [rollNumber, code]);

  const handleSingleSemForm = async (e) => {
    e.preventDefault();
    const rollNumber = e.target.rollNumber.value;
    const code = e.target.code.value;
    setRollNumber(rollNumber);
    setCode(code);

    // const response = await fetch(`http://localhost:3001/singleSem?rollNumber=${rollNumber}&sem=${code}`);
    // const data = await response.json();
  }

  const handleAllSemsForm = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <Head>
        <title>RRResults</title>
      </Head>

      <AllSems submitFunction={handleAllSemsForm} />
      <h1 className="note w-fit mx-auto">(OR)</h1>
      <SingleSem submitFunction={handleSingleSemForm} />
    </div>
  )
}
