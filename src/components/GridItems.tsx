import GameCard from "../GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { useGames } from "./hooks/UseGames";
import type { Genre } from "./hooks/UseGenres";

export interface SelectedGenreProps {
  selectedGenre: Genre | null;
  selectedPlatform: string | null;
}

export default function GridItems({
  selectedGenre,
  selectedPlatform,
}: SelectedGenreProps) {
  console.log(selectedPlatform);
  const { error, games, isLoading } = useGames({ selectedGenre, selectedPlatform });

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2">
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </div>
    </>
  );
}
