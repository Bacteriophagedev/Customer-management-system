
export default function TopNavbar() {
    return (
      <div className="flex justify-between items-center bg-white p-4 shadow">
        <div className="flex justify-center w-full">
          <input
            type="text"
            placeholder="Search customer details"
            className="border rounded p-2 w-1/2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded hover:bg-gray-200">?</button>
          <button className="p-2 rounded hover:bg-gray-200">JA</button>
        </div>
      </div>
    );
  }
  