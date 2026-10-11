import GridItems from "./components/GridItems";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className = "m-2">
      <div className="hidden md:flex lg:flex mb-3.5">
        <NavBar />
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-4 p-3">
        <div className="col-start-1">Hi i am in grid 1</div>
        <div className="lg:col-start-2 xl:cols-start-2 lg:col-span-2 xl:col-span-3"> <GridItems/></div>
      </div>
    </div>
  );
}

export default App;
