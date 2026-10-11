import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import type { AxiosError, CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;

}

export function useGenres() {

     const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
         const controller = new AbortController()
      const fetchGames = async () => {
         
        try {
           setIsLoading(true)
          const res = await apiClient.get("/genres", { signal: controller.signal });
          setIsLoading(false)
          setGenres(res.data.results);
          
         } catch (error) {
          setError((error as AxiosError).message);
          setIsLoading(false)
         }
           return ()=> controller.abort()
       };
       fetchGames();
     }, []);
    return {genres, error, isLoading }
}