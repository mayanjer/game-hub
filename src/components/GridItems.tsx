import GameCard from "../GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { useGames, type Game } from "./hooks/UseGames";

export default function GridItems(filteredGames:Game[]) {
  const { error, games, isLoading } = useGames();

  const skeletons = [1,2,3,4,5,6,7,8,9]

  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2">
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard game={game} />
        ))}
        {filteredGames && filteredGames.map((filteredGame) => (
          <GameCard game={filteredGame} />
        ))}
      </div>
    </>
  );
}
