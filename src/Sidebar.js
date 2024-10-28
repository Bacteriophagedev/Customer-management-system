
export default function Sidebar() {
    return (
      <div className="w-1/6 bg-gray-100 h-screen p-4">
        <div className="text-xl font-semibold mb-6">Princeps Finance</div>
        <nav className="space-y-4">
          <button className="flex items-center p-2 hover:bg-gray-200 rounded">
            Quick Action
          </button>
          <button className="flex items-center p-2 hover:bg-gray-200 rounded">
            Customers
          </button>
          <button className="flex items-center p-2 hover:bg-gray-200 rounded">
            Teams
          </button>
          <button className="flex items-center p-2 hover:bg-gray-200 rounded">
            Settings
          </button>
        </nav>
      </div>
    );
  }
  