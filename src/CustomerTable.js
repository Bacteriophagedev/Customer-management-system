import React, { useEffect, useState } from 'react';
import { fetchCustomers } from './Api'; 

export default function CustomerTable() {
  const [customers, setCustomers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5); 
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const loadCustomers = async () => {
      setLoading(true);
      try {
        const data = await fetchCustomers(searchText, pageSize, page);
        setCustomers(data.customers || []);
      } catch (error) {
        console.error('Failed to fetch customers:', error);
      } finally {
        setLoading(false);
      }
    };
    loadCustomers();
  }, [searchText, page, pageSize]);

  return (
    <div className="bg-white rounded shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search customers"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border p-2 rounded w-1/3"
        />
        <div className="flex items-center space-x-2">
            <button className="p-2 rounded hover:bg-gray-200 border border-gray-300">Filter</button>
            <button className="p-2 rounded hover:bg-gray-200 border border-gray-300">Edit columns</button>
            <button className="p-2 rounded hover:bg-gray-200 border border-gray-300">Export .csv</button>
        </div>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone number</th>
            <th className="p-2">Status</th>
            <th className="p-2">Joined at</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="5" className="text-center p-4">Loading...</td>
            </tr>
          ) : customers.length > 0 ? (
            customers.map((customer, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{customer.name}</td>
                <td className="p-2">{customer.email}</td>
                <td className="p-2">{customer.phone}</td>
                <td className="p-2">
                  <span
                    className={`${
                      customer.status === "Active"
                        ? "bg-green-200 text-green-800"
                        : customer.status === "Inactive"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-gray-200 text-gray-800"
                    } rounded-full px-2 py-1`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="p-2">{new Date(customer.joined).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4">No customers found</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="p-2 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="p-2 rounded hover:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
}
