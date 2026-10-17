import { useState } from "react";
import GenreList from "./components/GenreList";
import GridItems from "./components/GridItems";
import NavBar from "./components/NavBar";
import type { Genre } from "./components/hooks/UseGenres";


function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  function handleSelectedGenre(genre:Genre) {
    setSelectedGenre(genre)
  }
  

  return (
    <div className="m-2">
      <div className="hidden md:flex lg:flex mb-3.5">
        <NavBar />
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-4 p-3">
        <div className="hidden md:col-start-1 md:flex lg:flex lg:col-start-1 xl:col-start-1 xl:flex 2xl:flex">
          <GenreList onSelectedGenre={handleSelectedGenre}/>
        </div>
        <div className="lg:col-start-2 xl:cols-start-2 lg:col-span-2 xl:col-span-3">
          {" "}
          <GridItems selectedGenre={ selectedGenre } />
        </div>
      </div>
    </div>
  );
}

export default App;
