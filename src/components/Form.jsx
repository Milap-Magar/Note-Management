import React, { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pdf, setPdf] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("pdf", pdf);
    formData.append("thumbnail", thumbnail);

    try {
      const response = await fetch("http://localhost:8082/notes", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Note uploaded successfully!");
      } else {
        console.error("Failed to upload note");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto m-10 p-5 bg-sky-200 shadow-lg shadow-slate-950 rounded-lg ">
      <h2 className="text-2xl font-bold mb-5 text-center font-mono">Upload Note</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
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
            id="description"
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pdf"
          >
            PDF
          </label>
          <input
            id="pdf"
            type="file"
            className="w-full text-gray-700"
            accept=".pdf"
            onChange={(e) => setPdf(e.target.files[0])}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="thumbnail"
          >
            Thumbnail
          </label>
          <input
            id="thumbnail"
            type="file"
            className="w-full text-gray-700"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files[0])}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
