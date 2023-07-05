import Details from "@/components/Results/Details";
import GoBack from "@/components/Results/GoBack";
import Table from "@/components/Results/Table";
import { useRouter } from "next/navigation";

const Results = () => {
  const router = useRouter();
  const data = router.query;
  console.log(data);
  return (
    <div>
        <Details />
        <Table />
        <GoBack />
    </div>
  )
}

export default Results;