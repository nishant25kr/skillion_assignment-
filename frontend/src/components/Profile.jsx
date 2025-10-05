import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">


      {/* Content */}
      <div className="pt-24 max-w-7xl mx-auto px-6">
        {/* Welcome */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome, Admin!
        </h2>
        <p className="text-gray-600 mb-10">
          Here’s a quick overview of the resumes and your workflow.
        </p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-gray-500 font-semibold mb-2">Total Resumes</h3>
            <p className="text-3xl font-bold text-gray-800">128</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-gray-500 font-semibold mb-2">Pending Reviews</h3>
            <p className="text-3xl font-bold text-gray-800">34</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-gray-500 font-semibold mb-2">Shortlisted</h3>
            <p className="text-3xl font-bold text-gray-800">42</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all">
            View Resumes
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all">
            Add Job
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all">
            Generate Reports
          </button>
        </div>

        {/* Example Section */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-gray-700 font-bold mb-4">Recent Resumes</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-3 text-gray-500">Name</th>
                <th className="border-b p-3 text-gray-500">Email</th>
                <th className="border-b p-3 text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-3">John Doe</td>
                <td className="border-b p-3">john@example.com</td>
                <td className="border-b p-3 text-green-600 font-semibold">
                  Shortlisted
                </td>
              </tr>
              <tr>
                <td className="border-b p-3">Jane Smith</td>
                <td className="border-b p-3">jane@example.com</td>
                <td className="border-b p-3 text-yellow-600 font-semibold">
                  Pending
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
