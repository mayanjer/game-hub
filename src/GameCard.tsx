import Game from "./components/hooks/UseGames";

interface Platform {
  id: number;
  slug: string;
  name:string

}

interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: Platform[];
}

export default function GameCard({ background_image, name, platforms }: Game) {
  console.log(platforms)
  return (
    <div className="border bg-gray-300 rounded-xl overflow-hidden">
      <img src={background_image} className="" alt="img" />
      <div>{platforms.map((platform => <div>{ platform.name }</div>))}</div>
      <div>{name}</div>
    </div>
  );
}