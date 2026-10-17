import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import type { AxiosError,  } from "axios";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

export function usePlatforms() {

     const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
         const controller = new AbortController()
      const fetchPlatforms = async () => {
         
        try {
           setIsLoading(true)
          const res = await apiClient.get("/platforms/lists/parents", { signal: controller.signal });
          setIsLoading(false)
          setPlatforms(res.data.results);
          
         } catch (error) {
          setError((error as AxiosError).message);
          setIsLoading(false)
         }
           return ()=> controller.abort()
       };
       fetchPlatforms();
     }, []);
    return {platforms, error, isLoading }
}