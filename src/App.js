// App.js
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import CustomerSummary from "./CustomerSummary";
import CustomerTable from "./CustomerTable";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <TopNavbar />
        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-4 text-sky-800">Customers</h1>
          <p className="text-gray-600 mb-6">Create, edit and manage your customers.</p>
          <CustomerSummary />
          <CustomerTable />
        </main>
      </div>
    </div>
  );
}