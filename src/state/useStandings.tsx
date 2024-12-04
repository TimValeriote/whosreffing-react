import { atom, useRecoilState } from "recoil";
import axios from "axios";
import { useEffect } from 'react';
import { Standings } from "../models/standings";

export const StandingsState = atom<Standings[]>({
  key: 'StandingsState',
  default: []
});

export const useStandings = (leagueId: string) => {
    const [standings, setStandings] = useRecoilState(StandingsState);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`/whosreffing/leaguestandings/${leagueId}`);
  
          const standings: Standings[] = response.data.standings;
  
          setStandings(standings);
        } catch (error) {
          console.error('Error fetching standings:', error);
        }
      };
  
      fetchData();
    }, [leagueId]);
  
    return standings;
  };

