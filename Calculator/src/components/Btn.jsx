function Btn({ BtnName, handleBtnClick }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={() => handleBtnClick(BtnName)} // Use the handleBtnClick function
    >
      {BtnName}
    </button>
  );
}

export default Btn;
