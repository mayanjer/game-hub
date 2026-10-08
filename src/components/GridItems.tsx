import { useEffect, useState } from "react";
import apiClient, { AxiosError } from "./services/api-client";
import useGames from "./hooks/UseGames";



export default function GridItems() {

    const {error, games} = useGames()
 
  return (
    <>
      {error && <p>{error}</p>}
      {games.map((game) => (
        <li>{game.name}</li>
      ))}
    </>
  );
}
