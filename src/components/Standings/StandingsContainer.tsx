import { StandingsComponent } from "./StandingsComponent";
import { useRecoilValue } from "recoil";
import { useStandings } from "../../state/useStandings";
import { useState } from "react";
import { LeaguesState, useLeagues } from "../../state/useLeagues";

type StandingsContainerProps = {
    darkMode: boolean;
};

export function StandingsContainer({ darkMode }: StandingsContainerProps) {
    useLeagues();
    const leagues = useRecoilValue(LeaguesState);

    const [leagueId, setLeagueId] = useState('1');

    const standings = useStandings(leagueId);

    const handleLeagueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLeagueId = event.target.value;
        setLeagueId(selectedLeagueId);
    };

    return (
        <StandingsComponent
            darkMode = {darkMode}
            leagues={leagues}
            standings={standings}
            onLeagueChange={handleLeagueChange}
        ></StandingsComponent>
    );
}