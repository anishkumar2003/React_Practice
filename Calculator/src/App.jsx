import Display from "./components/Display";
import { BtnList } from "./components/BtnList";
import Btn from "./components/Btn";
function App() {
  return (
    <>
      <div className="cal flex flex-col border mt-10 p-5 w-80">
        <Display />
        <div className="flex flex-wrap gap-5 justify-center mt-5">
          {BtnList.map((btn) => (
            <Btn key={btn} BtnName={btn}></Btn>
          ))}
        </div>
      </div>
    </>
  );
}
export default App;
