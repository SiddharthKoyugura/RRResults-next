const AllSems = () => {
  return (
    <div className="card h-[25rem]">
      <div className="m-10">
        <div className="flex justify-center  w-full">
          <h1 className="note">Get Single Sem Results with SGPA</h1>
        </div>
        <div className="form-container">
          <form>
            <label htmlFor="rollNumber">Enter your Roll Number:</label>
            <br />
            <input type="text" name="rollNumber" id="rollNumber" />
            <label htmlFor="semester">Semester:</label>
            <br />
            <select class="form-control" id="code" name="code" required>
              <option value="1-1">1-1</option>
              <option value="1-2">1-2</option>
              <option value="2-1">2-1</option>
              <option value="2-2">2-2</option>
              <option value="3-1">3-1</option>
              <option value="3-2">3-2</option>
              <option value="4-1">4-1</option>
              <option value="4-2">4-2</option>
            </select>

            <div className="button">
              <button type="Submit">Get Result</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AllSems;
