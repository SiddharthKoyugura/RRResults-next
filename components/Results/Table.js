const Table = ({ marks, semCode, sgpa }) => {
  return (
    <div className="flex flex-col">
      <div className="note w-fit mx-auto">
        <h1>Semster: {semCode}</h1>
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full">
          <div className="overflow-hidden">
            <table className="w-full overflox-hidden text-center text-sm font-light">
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
                {marks.map((mark, index) => {
                  let classes = '';
                  if (index % 2 === 0) {
                    classes =
                      "border-b border-success-200 bg-success-100 text-neutral-800";
                  } else {
                    classes =
                      "border-b border-neutral-100 bg-neutral-50 text-neutral-800";
                  }
                  return (
                    <tr
                      key={index}
                      className={classes}
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {mark.subject_code}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {mark.subject_name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {mark.marks}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {mark.grade}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {mark.credits}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="m-5">
        <div className="border border-neutral-700 bg-neutral-800 text-neutral-50 font-medium w-fit p-1 mx-auto rounded-lg flex flex-row">
          <h2 className="whitespace-nowrap px-6 py-4 font-medium">SGPA:</h2>
          <h2 className="whitespace-nowrap px-6 py-4">{sgpa}</h2>
        </div>
      </div>
    </div>
  );
};

export default Table;
