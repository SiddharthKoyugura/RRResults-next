const Table = () => {
  return (
    <div className="flex flex-col">
        <div className="note w-fit mx-auto">
            <h1>Semster: 1-1</h1>
        </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border border-neutral-700 bg-neutral-800 text-neutral-50 font-medium">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    <h2>S.No</h2>
                  </th>
                  <th scope="col" className="px-6 py-4">
                    <h2>Subject Code</h2>
                  </th>
                  <th scope="col" className="px-6 py-4">
                    <h2>Subject Name</h2>
                  </th>
                  <th scope="col" className="px-6 py-4">
                    <h2>Marks</h2>
                  </th>
                  <th scope="col" className="px-6 py-4">
                    <h2>Grade</h2>
                  </th>
                  <th scope="col" className="px-6 py-4">
                    <h2>Credits</h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-success-200 bg-success-100 text-neutral-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <h2>01</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>15102</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>PROGRAMMING FOR PROBLEM SOLVING LAB</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>96</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>O</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>1.5</h2>
                  </td>
                </tr>
                <tr className="border-b border-neutral-100 bg-neutral-50 text-neutral-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <h2>02</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>15102</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>PROGRAMMING FOR PROBLEM SOLVING LAB</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>96</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>O</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>1.5</h2>
                  </td>
                </tr>
                <tr className="border-b border-success-200 bg-success-100 text-neutral-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <h2>01</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>15102</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>PROGRAMMING FOR PROBLEM SOLVING LAB</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>96</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>O</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>1.5</h2>
                  </td>
                </tr>
                <tr className="border-b border-neutral-100 bg-neutral-50 text-neutral-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <h2>02</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>15102</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>PROGRAMMING FOR PROBLEM SOLVING LAB</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>96</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>O</h2>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <h2>1.5</h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="m-5">
        <div className="border border-neutral-700 bg-neutral-800 text-neutral-50 font-medium w-fit p-1 mx-auto rounded-lg flex flex-row">
          <h2 className="whitespace-nowrap px-6 py-4 font-medium">
            SGPA:
          </h2>
          <h2 className="whitespace-nowrap px-6 py-4">
            8.39
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Table;
