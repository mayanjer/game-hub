
import GameCard from "../GameCard";
import useGames from "./hooks/UseGames";



export default function GridItems() {

    const {error, games} = useGames()
 
  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid">
        <div className="columns-3 min-w-0">
          {games.map((game) => (
            <GameCard id={game.id} name={ game.name} background_image={ game.background_image} />
          ))}
        </div>
      </div>
    </>
  );
}
