import { useGenres, type Genre } from "./hooks/UseGenres";
import cropImage from "./services/image-url";



function GenreList(handleClick : (genre:Genre)=>void) {
  const { genres } = useGenres();
  return (
    <ul className="flex flex-col gap-4">
      <h2>Genres</h2>
      {genres.map((genre) => (
        <button type="submit" className="flex gap-2" onClick = {()=>handleClick(genre)}>
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
