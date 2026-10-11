import { useGenres } from "./hooks/UseGenres"

function GenreList() {
    const {genres} = useGenres()
    return <ul>
        {genres.map((genre) => <li>{ genre.name}</li>)}
    </ul>
}

export default GenreList