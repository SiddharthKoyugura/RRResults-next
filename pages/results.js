import Details from "@/components/Results/Details";
import GoBack from "@/components/Results/GoBack";
import Table from "@/components/Results/Table";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Results = () => {
  const router = useRouter();
  const queryData = router.query;
  const { rollNumber, code } = queryData;

  // Results state
  const [singleSemData, setSingleSemData] = useState({});

  useEffect(() => {
    if (Object.entries(singleSemData).length !== 0) {
      console.log("sem_data =", singleSemData);

      if (singleSemData.message) {
        alert("Invalid credentials");
        router.push("/");
      }
    } else {
      try {
        fetch(
          `http://localhost:3003/singleSem?rollNumber=${rollNumber}&sem=${code}`
        )
          .then((res) => res.json())
          .then((data) => {
            setSingleSemData(data);
            console.log(data, singleSemData);
          });
      } catch (err) {
        console.log("Error", err);
      }
    }
  }, [singleSemData, router, rollNumber, code]);

  return (
    <div>
      {(Object.entries(singleSemData).length !== 0 && !singleSemData.message) ? (
        <>
          <Details data={singleSemData.details} />
          <Table marks={singleSemData.marks} semCode={code} sgpa={singleSemData.sgpa} />
          <GoBack />
        </>
      ) :
      <h1 className="flex justify-center">Loading..</h1>}
    </div>
  );
};

export default Results;
