import AllSems from "@/components/Form/AllSems";
import SingleSem from "@/components/Form/SingleSem";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Home() {
  // Router
  const router = useRouter();

  // Results state
  const [ singleSemData, setSingleSemData ] = useState({});

  useEffect(()=>{
    if(Object.entries(singleSemData).length !==0){
      console.log("sem_data =",singleSemData);
      
      if(singleSemData.message){
        alert("Invalid credentials");
        router.push("/");
      }
      else{
        router.push({
          pathname: '/results',
          query: singleSemData,
        });
      }
    }
  }, [singleSemData, router])

  const handleSingleSemForm = async (e) => {
    e.preventDefault();
    const rollNumber = e.target.rollNumber.value;
    const code = e.target.code.value;
    try {
      fetch(`http://localhost:3003/singleSem?rollNumber=${rollNumber}&sem=${code}`)
      .then((res)=>res.json())
      .then((data)=>{
        setSingleSemData(data);
        console.log(data, singleSemData);
      })
    } catch (err) {
      console.log("Error", err);
    }
  };

  const handleAllSemsForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Head>
        <title>RRResults</title>
      </Head>

      <AllSems submitFunction={handleAllSemsForm} />
      <h1 className="note w-fit mx-auto">(OR)</h1>
      <SingleSem submitFunction={handleSingleSemForm} />
    </div>
  );
}
