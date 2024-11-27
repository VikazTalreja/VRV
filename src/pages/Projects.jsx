import React, { useState, useEffect } from "react";
import Card from "../components/Card/card"; 
import mockDepartments from "../data/mockTeams.json";
import Modal from "../components/Modal/modal"; 

const Projects = () => {
  const [departments, setDepartments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      const data = await new Promise((resolve) =>
        setTimeout(() => resolve(mockDepartments))
      );
      setDepartments(data);
    };

    fetchDepartments();
  }, []);

  const OpenModal = (department) => {
    setSelectedDepartment(department);
    setIsModalOpen(true);
  };

  const CloseModal = () => {
    setIsModalOpen(false);
    setSelectedDepartment(null);
  };

  return (
    <div className="min-h-screen bg-indigo-100 flex flex-col">
      <header className="bg-indigo-600 text-white p-6 shadow-md">
        <h1 className="text-4xl font-bold">Departments</h1>
          </header>

      <main className="p-6">
        <div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((department) => (
            <div
              key={department.id}
              onClick={() => OpenModal(department)}
              className="cursor-pointer"
            >
              <Card department={department} />
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && selectedDepartment && (
        <Modal department={selectedDepartment} onClose={CloseModal} />
      )}

      <footer className="bg-indigo-600 text-white p-4 mt-auto shadow-inner">
        <p className="text-center">By Vikas Talreja</p>
        <p className="text-center">Email:vikazztalreja@gmail.com</p>
        <p className="text-center">Contact: +91 9689093000</p>
      </footer>
    </div>
  );
};

export default Projects;
