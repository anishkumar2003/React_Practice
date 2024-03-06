import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  //   const [data, setdata] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/anishkumar2003")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setdata(data);
  //       });
  //   }, []);
  const data = useLoaderData();
  return (
    <div className=" bg-slate-500 p-5">
      <div className="card flex  gap-5 justify-center items-center ">
        <div className="img flex flex-col gap-5 text-center">
          <img
            className="h-[300px] w-[300px] rounded-lg"
            src={data.avatar_url}
            alt="profile"
          />
          <h1 className="text-3xl font-bold">{data.name}</h1>
        </div>
        <div className="desc w-1/4 text-justify text-xl opacity-70 text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quisquam
          quae numquam, et dolore eligendi? Temporibus voluptatum ut
          consequuntur reiciendis odit odio esse quisquam suscipit, enim
          explicabo earum voluptate molestiae dolorem nemo corrupti expedita
          dolores!
        </div>
      </div>
    </div>
  );
}

export const userInfo = () => {
  const data = fetch("https://api.github.com/users/anishkumar2003");
  return data.then((response) => response.json());
};
