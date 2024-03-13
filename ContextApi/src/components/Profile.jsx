import React from "react";
import { useContext } from "react";
import Context from "../Context/userContext";
const Profile = () => {
  const { user } = useContext(Context);
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4 mb-4">
        <img
          className="w-32 h-32 rounded-full mb-4"
          src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Profile Picture"
        />
        <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
        <p className="text-gray-500">{user.profile}</p>
      </div>
      <div className="bg-white rounded-lg p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Bio:</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum, nunc ut vestibulum tincidunt, nisl justo ultrices mauris,
          nec aliquam nunc nunc id nunc.
        </p>
      </div>
    </div>
  );
};

export default Profile;
