import { useGenres, type Genre } from "./hooks/UseGenres";
import cropImage from "./services/image-url";

interface Props {
  onSelectedGenre: (genre : Genre)=> void
}

function GenreList({onSelectedGenre}:Props) {
  const { genres } = useGenres();
  return (
    <ul className="flex flex-col gap-4">
      <h2>Genres</h2>
      {genres.map((genre) => (
        <button type="submit" className="flex gap-2" onClick = {()=>onSelectedGenre(genre)}>
          <img
            src={cropImage(genre.image_background, {
              width: "24",
              length: "24",
            })}
            alt="Image"
          />
          {genre.name}
        </button>
      ))}
    </ul>
  );
}

export default GenreList;