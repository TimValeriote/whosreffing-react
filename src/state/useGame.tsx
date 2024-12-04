import axios from "axios";
import { useEffect, useState } from 'react';
import { Game } from "../models/game";


export const useGameInfo = (gameId: number) => {
  const [gameInfo, setGameInfo] = useState<Game | null>(null);

  useEffect(() => {
    const fetchGameInfo = async () => {
      try {
        const response = await fetch(`/whosreffing/game/${gameId}`);
        const data = await response.json();

        if (response.ok) {
          const gameInfoData: Game = data.game;
          setGameInfo(gameInfoData);
        } else {
          console.error('Error fetching game info:', (data as any).error);
        }
      } catch (error) {
        console.error('Error fetching game info:', (error as Error).message);
      }
    };

    // Only fetch data when gameId changes
    fetchGameInfo();
  }, [gameId]);

  return gameInfo;
};


