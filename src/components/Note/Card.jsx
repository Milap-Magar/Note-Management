import React from "react";
import dataArray from "../../data/data";

const Card = () => {
  return (
    <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {dataArray.map((data, key) => (
        <div
          key={key}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <figure className="mb-4">{/* Placeholder for the image */}</figure>
          <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
          <p className="text-gray-600 mb-4">{data.description}</p>
          <span className="text-gray-500 text-sm">
            {new Date(data.createdAt).toLocaleDateString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Card;
