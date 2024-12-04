import { useParams } from "react-router-dom";
import { Game } from "../../models/game";
import { useGameInfo } from "../../state/useGame";
import { OfficialDetailsState, useOfficialDetails } from "../../state/useOfficialDetails";
import { OfficialComponent } from "./OfficialComponent";
import { useRecoilValue } from "recoil";

type OfficialContainerProps = {
    darkMode: boolean;
};

export function OfficialContainer({ darkMode }: OfficialContainerProps) {
    const { officialId } = useParams();
    useOfficialDetails(officialId || '');

    const games = useRecoilValue(OfficialDetailsState);

    return (
        <OfficialComponent darkMode={darkMode} officialDetails={ games }></OfficialComponent>
    )
}