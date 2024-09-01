import React, { useState } from "react";

const Add = () => {
  const [dialog, setDialog] = useState(false);

  const handleClick = () => {
    setDialog(!dialog);
  };

  return (
    <div className="z-0 relative">
      {dialog ? (
        <div className="absolute inset-0 flex top-56 items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-full w-full">
            <h2 className="text-lg font-bold mb-4">Add New Item</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  placeholder="Enter title"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  placeholder="Enter description"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-fuchsia-500 text-white px-4 py-2 rounded hover:bg-fuchsia-600"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  type="button"
                  onClick={handleClick}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <button
          className="px-3 py-1 rounded-lg bg-fuchsia-500 text-slate-100 shadow-lg shadow-pink-400"
          onClick={handleClick}
        >
          Add
        </button>
      )}
    </div>
  );
};

export default Add;
