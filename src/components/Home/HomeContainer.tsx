import { Game } from "../../models/game";
import { useGameInfo } from "../../state/useGame";
import { ActiveGamesState, useActiveGames } from "../../state/useActiveGames";
import { HomeComponent } from "./HomeComponent";
import { useRecoilValue } from "recoil";
import { useOfficialDetails } from "../../state/useOfficialDetails";

type HomeContainerProps = {
    darkMode: boolean;
};


export function HomeContainer({ darkMode }: HomeContainerProps) {
    useActiveGames();

    const games = useRecoilValue(ActiveGamesState);

    return (
        <HomeComponent darkMode={ darkMode } activeGamesByLeague={ games }></HomeComponent>
    )
}