import React from "react";
import Card from "./components/Card";
import { users } from "./components/data";
function App() {
  return (
    <>
      <div className="Maindiv">
        <h1 className="bg-green-600 mt-10 p-2">Tailwind css</h1>
        <div className="cards flex flex-wrap gap-2">
          {Object.keys(users).map((userId) => (
            <Card
              key={userId}
              Profile={users[userId].profile.job}
              description={users[userId].description}
              url={users[userId].profile.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
