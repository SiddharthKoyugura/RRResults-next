import Link from "next/link"


const GoBack = () => {
  return (
    <div className="my-5 flex justify-center h-fit">
        <Link href="/" className="bg-black hover:bg-white hover:border-2 hover:border-solid hover:border-black hover:text-black font-[500] w-fit rounded-lg text-white p-3 mx-auto  h-fit text-2xl">Go Back!</Link>
    </div>
  )
}

export default GoBack