import type {Game} from './components/hooks/UseGames'





export default function GameCard({ background_image, name, parent_platforms }: Game) {
  
  return (
    <div className="border bg-gray-300 rounded-xl overflow-hidden">
      <img src={background_image} alt="img" />
      {parent_platforms.map(({platform}) => (
        <div>{platform.name}</div>
      ))}
      <div>{name}</div>
    </div>
  );
}
