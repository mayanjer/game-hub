import { useEffect, useState } from "react";
import apiClient, { AxiosError } from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

export default function useGames() {

     const [games, setGames] = useState<Game[]>([]);
     const [error, setError] = useState("");
    useEffect(() => {
         const controller = new AbortController()
       const fetchGames = async () => {
         try {
           const res = await apiClient.get("/games", {signal: controller.signal});
           setGames(res.data.results);
         } catch (error) {
           setError((error as AxiosError).message);
         }
           return ()=> controller.abort()
       };
       fetchGames();
     }, []);
    return {games, error }
}