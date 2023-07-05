

const Details = ({ data }) => {
  return (
    <div className="mx-6 my-6">
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full mx-10 mb-10">
          <h1>Name: {data["NAME:"]}</h1>
          <h1>Father Name: {data["FATHER NAME:"]}</h1>
          <h1>Roll Number: {data["HTNO:"]}</h1>
          <h1>College: {data["COLLEGE CODE:"]}</h1>
      </div>
    </div>
  )
}

export default Details