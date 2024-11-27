import React, { useState, useEffect } from "react";

const Modal = ({ department, onClose }) => {
  const [isRoleAddOpen, setIsRoleAddOpen] = useState(false);
  const [newRole, setNewRole] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [roles, setRoles] = useState(department.roles || [
    { roleName: "Admin", permissions: ["Read", "Write", "Update", "Delete"] },
    { roleName: "Viewer", permissions: ["Read"] },
    { roleName: "Editor", permissions: ["Read", "Write", "Update"] },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const [tableData, setTableData] = useState([
    { name: "John Doe", status: "Active", role: "Admin" },
    { name: "Jane Smith", status: "Inactive", role: "Viewer" },
    { name: "Mark Lee", status: "Active", role: "Editor" },
    { name: "Anna Brown", status: "Inactive", role: "Admin" },
    { name: "Peter Green", status: "Active", role: "Editor" },
    { name: "Lisa White", status: "Inactive", role: "Viewer" },
  ]);

  const [isEditing, setIsEditing] = useState(null); // Track which row is being edited
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleAddRole = () => {
    if (newRole && selectedPermissions.length > 0) {
      setRoles([...roles, { roleName: newRole, permissions: selectedPermissions }]);
      setNewRole("");
      setSelectedPermissions([]);
      setIsRoleAddOpen(false);
    }
  };

  const handlePermissionChange = (permission) => {
    setSelectedPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    );
  };

  const handleEditClick = (index) => {
    setIsEditing(index);
    setStatus(tableData[index].status);
    setRole(tableData[index].role);
  };

  const handleSaveClick = (index) => {
    const updatedData = [...tableData];
    updatedData[index] = { ...updatedData[index], status, role };
    setTableData(updatedData);
    setIsEditing(null);
  };

  const handleCancelClick = () => {
    setIsEditing(null);
  };

  const handleDeleteClick = (index) => {
    setTableData(tableData.filter((_, i) => i !== index));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredTableData = tableData.filter((member) => {
    return (
      (filterStatus === "All" || member.status === filterStatus) &&
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex lg:justify-end lg:items-start justify-center items-end">
      <div
        className="bg-white w-full lg:w-[40%] lg:h-full h-[80%] rounded-t-2xl lg:rounded-none lg:rounded-l-2xl overflow-y-auto shadow-lg transform transition-transform duration-300 ease-in-out"
       
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl lg:text-5xl font-bold">{department.departmentName}</h2>
            <button
              onClick={onClose}
              className="text-xl font-bold text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>

          {/* Department Details */}
          <div className="mb-4">
            <p className="text-lg font-medium">Team Lead:</p>
            <p className="text-gray-700">{department.teamLead}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-medium">Department Details:</p>
            <p className="text-gray-700">This is the {department.departmentName} department</p>
          </div>

          {/* Roles Section */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Roles in Department</h3>
            <ul className="list-disc pl-5">
              {roles.map((role, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {role.roleName} - {role.permissions.join(", ")}
                </li>
              ))}
            </ul>
          </div>

          {/* Add Role Button */}
          <div className="mb-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => setIsRoleAddOpen(!isRoleAddOpen)}
            >
              {isRoleAddOpen ? "Cancel" : "Add Role"}
            </button>
          </div>

          {/* Add Role Form */}
          {isRoleAddOpen && (
            <div className="mb-4">
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Enter new role name"
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  className="border p-2 w-full rounded"
                />
              </div>
              <div className="mb-2">
                <p className="text-lg font-medium">Select Permissions:</p>
                {["Read", "Write", "Update", "Delete"].map((permission) => (
                  <label key={permission} className="block">
                    <input
                      type="checkbox"
                      value={permission}
                      checked={selectedPermissions.includes(permission)}
                      onChange={() => handlePermissionChange(permission)}
                      className="mr-2"
                    />
                    {permission}
                  </label>
                ))}
              </div>
              <button
                onClick={handleAddRole}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Save Role
              </button>
            </div>
          )}

          {/* Search and Filter Section */}
          <div className="mb-4 flex flex-wrap gap-2">
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearchChange}
              className="border p-2 w-full lg:w-auto rounded flex-grow"
            />
            <select
              value={filterStatus}
              onChange={handleStatusFilterChange}
              className="border p-2 rounded"
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Name</th>
                  <th className="border p-2 text-left">Status</th>
                  <th className="border p-2 text-left">Role</th>
                  <th className="border p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTableData.map((member, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border p-2">{member.name}</td>
                    <td className="border p-2">{member.status}</td>
                    <td className="border p-2">
                    {isEditing === index ? (
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="border p-2 rounded"
                      >
                        {roles.map((r) => (
                          <option key={r.roleName} value={r.roleName}>
                            {r.roleName}
                          </option>
                        ))}
                      </select>
                    ) : (
                      member.role
                    )}
                  </td>
                  <td className="border p-2">
                    {isEditing === index ? (
                      <>
                        <button
                          onClick={() => handleSaveClick(index)}
                          className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelClick}
                          className="bg-red-500 text-white py-1 px-2 rounded ml-2 hover:bg-red-600"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEditClick(index)}
                          className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteClick(index)}
                          className="bg-red-500 text-white py-1 px-2 rounded ml-2 hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
