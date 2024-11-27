import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; 
import mockUsers from "../data/User.json";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("A-Z");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const role = useSelector((state) => state.role.role);

  const getInitials = (name) => {
    const splitName = name.split(" ");
    return splitName.length > 1
      ? `${splitName[0][0]}${splitName[1][0]}`
      : splitName[0][0].toUpperCase();
  };

  useEffect(() => {
    setUsers(mockUsers);
  }, []);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) =>
    sortOrder === "A-Z"
      ? a.username.localeCompare(b.username)
      : b.username.localeCompare(a.username)
  );

  const openModal = (user = null) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const handleSaveUser = (newUser) => {
    if (selectedUser) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === selectedUser.id ? { ...user, ...newUser } : user
        )
      );
    } else {
      const newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
      setUsers([...users, { id: newId, status: "Inactive", ...newUser }]);
    }
    closeModal();
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    closeModal();
  };

  return (
    <>
      <header className="bg-indigo-600 text-white p-6 shadow-md">
        <h1 className="text-4xl font-bold">Departments</h1>
      </header>
      <div className="p-6 bg-indigo-100 min-h-screen">
        {/* Search and Filter Section */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search by username"
            className="p-2 w-2/5 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring focus:ring-indigo-300"
          >
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>

        {/* User Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {sortedUsers.map((user) => (
            <div
              key={user.id}
              className="w-full h-48 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => openModal(user)}
            >
              <div className="flex flex-col justify-center items-center p-4">
                <div
                  className="rounded-full w-20 h-20 flex justify-center items-center text-white font-bold text-lg bg-indigo-400"
                >
                  {getInitials(user.username)}
                </div>
                <p className="text-gray-700 font-semibold text-sm mt-2">
                  {user.username}
                </p>
                <p className="text-gray-500 text-xs">{user.email}</p>
                <div
                  className={`mt-4 px-3 py-1 text-xs font-semibold rounded-lg text-white ${
                    user.status === "Active" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {user.status}
                </div>
              </div>
            </div>
          ))}

          {/* Add User Card (Only visible to Admin and Editor) */}
          {(role === "Admin" || role === "Editor") && (
            <div
              className="w-full h-48 bg-indigo-200 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-center items-center cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => openModal()}
            >
              <div className="w-16 h-16 bg-indigo-500 text-white text-4xl font-bold rounded-full flex justify-center items-center">
                +
              </div>
              <p className="text-indigo-700 text-lg mt-4 font-semibold">
                Add User
              </p>
            </div>
          )}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <Modal
            user={selectedUser}
            onClose={closeModal}
            onSave={handleSaveUser}
            onDelete={handleDeleteUser}
            role={role}  // Pass role to the modal
          />
        )}

        <footer className="bg-indigo-600 text-white p-4 mt-auto shadow-inner">
          <p className="text-center">By Vikas Talreja</p>
          <p className="text-center">Email:vikazztalreja@gmail.com</p>
          <p className="text-center">Contact: +91 9689093000</p>
        </footer>
      </div>
    </>
  );
};

const Modal = ({ user, onClose, onSave, onDelete, role }) => {
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [status, setStatus] = useState(user?.status || "Inactive");
  const [error, setError] = useState("");

  const validateInputs = () => {
    if (!username.trim() || !email.trim()) {
      setError("All fields are required.");
      return false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      setError("Email must be a valid Gmail address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSave = () => {
    if (validateInputs()) {
      onSave({ username, email, status });
    }
  };

  console.log("console k andar Role",role)
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">{user ? "Edit User" : "Add User"}</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {role !== "Viewer" && (
          <button
            onClick={() => setStatus(status === "Active" ? "Inactive" : "Active")}
            className={`w-full p-2 rounded-lg text-white font-medium mb-4 ${
              status === "Active" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            Mark as {status === "Active" ? "Inactive" : "Active"}
          </button>
        )}
        <div className="flex justify-end gap-3">
        {role !== "Viewer" &&(
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium"
              onClick={() => onDelete(user.id)}
            >
              Delete
            </button>
          )}
           <button
            className="px-4 py-2 bg-gray-500 text-white rounded-lg font-medium"
            onClick={onClose}
          >
            Cancel
          </button>
           
            {role !== "Viewer" && (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium"
            onClick={handleSave}
          >
            Save
          </button>
           )}
        </div>
      </div>
    </div>
  );
};

export default Users;
