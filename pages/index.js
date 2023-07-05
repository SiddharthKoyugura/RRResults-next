import AllSems from "@/components/Form/AllSems";
import SingleSem from "@/components/Form/SingleSem";
import Head from "next/head";
import { useRouter } from "next/router";



export default function Home() {
  // Router
  const router = useRouter();

  const handleSingleSemForm = async (e) => {
    e.preventDefault();
    const rollNumber = e.target.rollNumber.value;
    const code = e.target.code.value;
    router.push(`/results?rollNumber=${rollNumber}&code=${code}`);
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
