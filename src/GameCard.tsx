import Game from './components/hooks/UseGames'

interface Game {
  id: number;
  name: string;
  background_image: string;
}
export default function GameCard({background_image} : Game) {
    return <div className="border bg-amber-800  w-100 h-100"><img src={background_image} alt="" />Card</div>
}