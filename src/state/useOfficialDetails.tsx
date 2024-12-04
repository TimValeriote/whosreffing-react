import { atom, useRecoilState } from "recoil";
import axios from "axios";
import { useEffect } from 'react';
import { OfficialDetails } from "../models/official";

export const OfficialDetailsState = atom<OfficialDetails>({
    key: 'OfficialDetailsState',
    default: {
      id: 0,
      first_name: '',
      last_name: '',
      jersey_number: 0,
      games: [{
        league_name: '',
        league_id: '',
        league_games: [{
          game_id: '',
          ls_game_id: '',
          league_name: '',
          league_id: '',
          home_team: '',
          visitor_team: '',
          arena: '',
          game_time: '',
          game_date: '',
          referee_one: '',
          referee_two: '',
          linesman_one: '',
          linesman_two: '',
        }]
      }],
      official_stats: {
        leagues: [],
        total_games: 0,
        overtime_average: 0,
        shootout_average: 0,
        average_game_time: '',
        average_goals_per_game: 0,
        average_home_goals_per_game: 0,
        average_visitor_goals_per_game: 0,
        average_home_penalties_per_game: 0,
        average_visitor_penalties_per_game: 0,
        average_home_pims_per_game: 0,
        average_visitor_pims_per_game: 0,
      }
    }
  });

export const useOfficialDetails = (officialId: string) => {

  const [officialDetails, setOfficialDetails] = useRecoilState(OfficialDetailsState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/whosreffing/officialdetails/${officialId}`);

        const details: OfficialDetails = response.data.official_details;

        setOfficialDetails(details);
      } catch (error) {
        console.error('Error fetching active games:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once

  return officialDetails;
};

