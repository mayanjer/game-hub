
import GameCard from "../GameCard";
import {useGames} from "./hooks/UseGames";



export default function GridItems() {

    const {error, games} = useGames()
 
  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2">
        {games.map((game) => (
          <GameCard
            id={game.id}
            name={game.name}
            background_image={game.background_image}
            parent_platforms={game.parent_platforms}
          />
        ))}
      </div>
    </>
  );
}
