import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <div className="grid p-3">
        <div className="hidden lg:flex lg:row-span-2 mb-3.5">
          <NavBar/>
        </div>


        <div className="lg:col-start-1">Hi i am in grid 1</div>
        <div className="lg:col-start-2"> Hi i am in grid 2</div>
      </div>
    </>
  );
}

export default App;
