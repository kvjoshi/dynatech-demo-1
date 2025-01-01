export default function RecentQueries() {
  const queries = [
    {
      caseNumber: "CAS-893222-W6H0R7",
      category: "Confirm Membership",
      status: "In Progress",
      createdDate: "02/Apr/2024",
      resolvedDate: "--/--/----",
    },
    {
      caseNumber: "CAS-893223-X5G0J2",
      category: "Confirm Membership",
      status: "In Progress",
      createdDate: "02/Apr/2024",
      resolvedDate: "--/--/----",
    },
    {
      caseNumber: "CAS-887247-R3P9F4",
      category: "Registrations",
      status: "In Progress",
      createdDate: "11/Dec/2023",
      resolvedDate: "--/--/----",
    },
    {
      caseNumber: "CAS-887246-T3C6R5",
      category: "Registrations",
      status: "Application Approved",
      createdDate: "11/Dec/2023",
      resolvedDate: "11/Dec/2023",
    },
  ];

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg w-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#004990] font-bold text-xl md:text-2xl">
          Recent Queries
        </h1>
        <a
          href="#"
          className="text-sm md:text-base text-[#E64000] font-semibold"
        >
          View All Queries &raquo;
        </a>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-300 mt-2"></div>

      {/* Show Options */}
      <div className="flex items-center gap-2 mt-4">
        <label htmlFor="show" className="text-sm font-medium text-gray-600">
          Show
        </label>
        <select
          id="show"
          className="rounded-md border border-gray-300 p-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#004990]"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>

      {/* Table */}
      <div className="mt-4">
        {/* Desktop View */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-[#000]">
                <th className="p-2">CASE NUMBER</th>
                <th className="p-2">CATEGORY</th>
                <th className="p-2">STATUS</th>
                <th className="p-2">CREATED DATE</th>
                <th className="p-2">RESOLVED DATE</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((query, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-[#F9FBFD]"
                  } text-gray-700`}
                >
                  <td className="p-2">{query.caseNumber}</td>
                  <td className="p-2">{query.category}</td>
                  <td className="p-2">{query.status}</td>
                  <td className="p-2">{query.createdDate}</td>
                  <td className="p-2">{query.resolvedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="sm:hidden">
          {queries.map((query, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-md"
            >
              <div className="mb-2">
                <span className="text-[#000] font-semibold">CASE NUMBER: </span>
                <span>{query.caseNumber}</span>
              </div>
              <div className="mb-2">
                <span className="text-[#000] font-semibold">CATEGORY: </span>
                <span>{query.category}</span>
              </div>
              <div className="mb-2">
                <span className="text-[#000] font-semibold">STATUS: </span>
                <span>{query.status}</span>
              </div>
              <div className="mb-2">
                <span className="text-[#000] font-semibold">
                  CREATED DATE:{" "}
                </span>
                <span>{query.createdDate}</span>
              </div>
              <div>
                <span className="text-[#000] font-semibold">
                  RESOLVED DATE:{" "}
                </span>
                <span>{query.resolvedDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
