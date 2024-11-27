import React, { useState } from "react";

const AccordionForm = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, items);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <form
        className="bg-white p-6 rounded-md shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg font-bold mb-4">Add New Phase</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-2 p-2 border rounded-md"
          required
        />
        <textarea
          placeholder="Items (comma-separated)"
          value={items}
          onChange={(e) => setItems(e.target.value)}
          className="w-full mb-4 p-2 border rounded-md"
          required
        />
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccordionForm;
