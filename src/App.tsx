import GridItems from "./components/GridItems";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className = "m-2">
      <div className="hidden lg:flex mb-3.5">
        <NavBar />
      </div>
      <div className="grid p-3">
        <div className="lg:col-start-1">Hi i am in grid 1</div>
        <div className="lg:col-start-2"> <GridItems/></div>
      </div>
    </div>
  );
}

export default App;
