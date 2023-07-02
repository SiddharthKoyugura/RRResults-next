

const SingleSem = () => {
  return (
    <div className="card">
        <div className="m-10">
            <div className="flex justify-center  w-full">
                <h1 className="note">Get All Sem Results with CGPA</h1>
            </div>
            <div className="form-container">
                <form>
                    <label htmlFor="rollNumber">Enter your Roll Number:</label>
                    <br />
                    <input type="text" name="rollNumber" id="rollNumber"/>
                    <div className="button">
                        <button type="Submit">Get Result</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SingleSem