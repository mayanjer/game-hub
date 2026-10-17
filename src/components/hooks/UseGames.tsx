import { useEffect, useState } from "react";
import apiClient, { AxiosError } from "../services/api-client";
import type { SelectedGenreProps } from "../GridItems";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export function useGames({selectedGenre}:SelectedGenreProps) {

     const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
         const controller = new AbortController()
      const fetchGames = async () => {
         
        try {
           setIsLoading(true)
          const res = await apiClient.get("/games", { signal: controller.signal, params:{genres:selectedGenre?.id} });
          setIsLoading(false)
          setGames(res.data.results);
          
         } catch (error) {
          setError((error as AxiosError).message);
          setIsLoading(false)
         }
           return ()=> controller.abort()
       };
       fetchGames();
     }, [selectedGenre]);
    return {games, error, isLoading }
}