import CriticScore from "./components/CriticScore";
import type { Game } from "./components/hooks/UseGames";
import PlatformList from "./components/PlatformsList";
import cropImage from "./components/services/image-url";


export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="border bg-gray-300 rounded-xl overflow-hidden">
      <img src={cropImage(game.background_image, {width:"600", length:"400"})} alt="img" />
      <div className="p-3">
        <div>{game.name}</div>
        <div className="flex justify-between items-center">
          <PlatformList parent_platforms={game.parent_platforms} />
          <CriticScore criticScore={game.metacritic} />
        </div>
      </div>
    </div>
  );
}
