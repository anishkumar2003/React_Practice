const Services = () => {
  return (
    <div className="container mx-auto my-5">
      <h1 className=" text-center text-3xl font-bold mb-4">Our Services</h1>
      <div className="text-justify grid grid-cols-1 gap-4 md:grid  md:grid-cols-3 md:gap-4 md:p-5">
        <div className="bg-white p-4  flex flex-col justify-center items-center border border-black">
          <h2 className="text-center text-xl font-bold mb-2">Service 1</h2>
          <img src="/path/to/your/image1.jpg" alt="Service 1" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-4 shadow flex flex-col justify-center items-center border border-black">
          <h2 className="text-center text-xl font-bold mb-2">Service 2</h2>
          <img src="/path/to/your/image2.jpg" alt="Service 2" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-4 shadow flex flex-col justify-center items-center border border-black">
          <h2 className="text-center text-xl font-bold mb-2">Service 3</h2>
          <img src="/path/to/your/image3.jpg" alt="Service 3" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
