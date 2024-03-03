function Btn({ BtnName }) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>console.log(`${BtnName} is clicked`)}>
      {BtnName}
    </button>
  );
}

export default Btn;
