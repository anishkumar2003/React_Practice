import React from "react";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card bg-white shadow-md rounded p-4 md:w-[450px]">
      <img
        className="w-full h-64 object-cover mb-4 rounded"
        src={imageUrl}
        alt={title}
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
