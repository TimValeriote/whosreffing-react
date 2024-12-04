import { atom, useRecoilState } from "recoil";
import axios from "axios";
import { useEffect } from 'react';
import { League } from "../models/league";

export const LeaguesState = atom<League[]>({
  key: 'LeaguesState',
  default: []
});

export const useLeagues = () => {
  const [leagues, setLeagues] = useRecoilState(LeaguesState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/whosreffing/leagues`);

        const leagues: League[] = response.data.leagues;

        setLeagues(leagues);
      } catch (error) {
        console.error('Error fetching active games:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once

  return leagues;
};

