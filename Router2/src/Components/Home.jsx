import React from "react";
import Card from "./Card";
import cdata from "./CardData";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Site</h1>
      <div className="md:w-[700px]">
        <img
          className="w-full h-64 object-cover mb-4 rounded"
          src="https://images.unsplash.com/photo-1548588681-adf41d474533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9udGFpbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Placeholder"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-5  md:flex-wrap md:justify-center">
        {cdata.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
