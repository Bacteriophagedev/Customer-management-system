
export default function CustomerSummary() {
    const summaryData = [
      { title: "All customers", count: 1300 },
      { title: "Active customers", count: 1300 },
      { title: "Overdue customers", count: 1300 },
      { title: "Inactive & Dormant", count: 1300 },
    ];
  
    return (
      <div className="grid grid-cols-4 gap-4 mb-6">
        {summaryData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded shadow text-center">
            <div className="text-gray-500">{item.title}</div>
            <div className="text-3xl font-semibold">{item.count}</div>
          </div>
        ))}
      </div>
    );
  }
  