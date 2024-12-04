import { GameCalendarComponent } from "./GameCalendarComponent";
import { useRecoilValue } from "recoil";
import { GameCalendarState, useGameCalendar } from "../../state/useGameCalendar";


export function GameCalendarContainer() {
    useGameCalendar();

    const calendar = useRecoilValue(GameCalendarState);

    return (
        <GameCalendarComponent gameCalendar={ calendar }></GameCalendarComponent>
    )
}