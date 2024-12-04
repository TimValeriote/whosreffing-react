import { atom, useRecoilState } from "recoil";
import axios from "axios";
import { useEffect } from 'react';
import { GameCalendar } from "../models/game_calendar";
import { getRouteData } from "../services/utils";

export const GameCalendarState = atom<GameCalendar[]>({
  key: 'GameCalendarState',
  default: []
});

export const useGameCalendar = () => {
  const [gameCalendar, setGameCalendar] = useRecoilState(GameCalendarState);

  useEffect(() => {
    const fetchData = async () => {
        const { response, error } = await getRouteData('gamescalendar', null);

        if (error) {
            console.error("u suk");
        } else {
            const gameCalendarData: GameCalendar[] = response.games_calendar;

            console.log("in the hook: ", gameCalendarData)

            setGameCalendar(gameCalendarData);
        }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once

  return gameCalendar;
};

