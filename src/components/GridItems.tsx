import { useEffect, useState } from "react";
import apiClient, { AxiosError } from "./services/api-client";

interface Game {
  id: number;
  name: string;
}

export default function GridItems() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await apiClient.get("/games");
        setGames(res.data.results);
      } catch (error) {
        setError((error as AxiosError).message);
      }
    };
    fetchGames();
  }, []);
  return (
    <>
      {error && <p>{error}</p>}
      {games.map((game) => (
        <li>{game.name}</li>
      ))}
    </>
  );
}
