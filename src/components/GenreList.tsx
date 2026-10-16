import { useGenres } from "./hooks/UseGenres"
import cropImage from "./services/image-url"

function GenreList() {
    const {genres} = useGenres()
    return <ul>
        {genres.map((genre) => <li className='flex gap-2'><img src={cropImage(genre.image_background, {width:"24", length:"24"})} alt="Image" />{genre.name}</li>)}
    </ul>
}

export default GenreList