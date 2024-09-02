import React, { useEffect, useState } from "react";
import axiosInstance from "../../services/axiosInstance";
import Button from "./Button";
import Download from "./Download";

const Card = () => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/notes");
        if (Array.isArray(response.data)) {
          setDataArray(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {dataArray.length > 0 ? (
        dataArray.map((data, key) => {
          const thumbnailUrl = data.thumbnail_url.replace("\\", "/");

          return (
            <div
              key={key}
              className="bg-white rounded-lg shadow-lg shadow-sky-300 p-6 hover:shadow-lg transition-shadow relative overflow-hidden"
            >
              <figure className="mb-4 relative">
                <img
                  src={`http://localhost:8082/images/${thumbnailUrl}`}
                  alt={data.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <figcaption className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold">
                  {data.title}
                </figcaption>
              </figure>
              <p className="text-gray-600 mb-4">{data.description}</p>
              <span className="text-gray-500 text-sm">
                {new Date(data.created_at).toLocaleDateString()}
              </span>
              <div className="button-section pt-4 flex justify-between items-center">
                <Download />
                <Button />
              </div>
            </div>
          );
        })
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
};

export default Card;
