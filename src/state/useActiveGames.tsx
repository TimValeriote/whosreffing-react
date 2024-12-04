import { atom, useRecoilState } from "recoil";
import axios from "axios";
import { useEffect } from 'react';
import { ActiveGameDetailsByLeague } from "../models/active_game";

export const ActiveGamesState = atom<ActiveGameDetailsByLeague[]>({
  key: 'ActiveGamesState',
  default: []
});

export const useActiveGames = () => {
  const [activeGames, setActiveGames] = useRecoilState(ActiveGamesState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/whosreffing/activegamesdetails');

        // Assuming the API response is stored in response.data.active_games
        const activeGamesData = response.data.active_games;

        // Mapping the data into the desired format
        const mappedData: ActiveGameDetailsByLeague[] = Object.keys(activeGamesData).map((league) => ({
          league,
          games: activeGamesData[league],
        }));

        // Setting the state with the mapped data
        setActiveGames(mappedData);
      } catch (error) {
        console.error('Error fetching active games:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once

  return activeGames;
};

