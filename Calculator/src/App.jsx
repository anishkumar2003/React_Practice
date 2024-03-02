import Button from "./Button";
function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "*", "+", "-", "/"];
  return (
    <>
      <h1>Calculator</h1>
      <Button num='${numbers}'></Button>
    </>
  );
}
export default App;
