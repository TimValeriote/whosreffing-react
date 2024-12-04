import { useState, useRef } from "react";
import { ActiveGameDetailsByLeague } from "../../models/active_game";
import styles from './Home.module.scss';

type HomeComponentProps = {
    activeGamesByLeague: ActiveGameDetailsByLeague[];
    darkMode: boolean;
};

export function HomeComponent({ darkMode, activeGamesByLeague }: HomeComponentProps) {
    const [selectedLeague, setSelectedLeague] = useState<string | null>(null);

    const selectLeague = (league: string | null = null) => {
        setSelectedLeague(league);
    };

    return (
        <div className={`${styles.container} ${darkMode ? styles['containerDark'] : ''}`}>
            <div className={styles.activeLeaguesHeader}>
                <div className={styles.activeLeaguesListHeader}>
                    <div>Leagues Active Today: </div>
                </div>

                <div className={styles.activeLeagueList}>
                    {activeGamesByLeague.map((league, i) => (
                        <div
                            className={`${styles.leagueButtonOuter} ${darkMode ? styles['leagueButtonOuterDark'] : ''}`}
                            key={i}
                            onClick={() => selectLeague(league.league)}
                        >
                            <div className={styles.leagueButton}>{league.league}</div>
                        </div>
                    ))}
                    <div
                        className={`${styles.leagueButtonOuter} ${darkMode ? styles['leagueButtonOuterDark'] : ''}`}
                        key={"all"}
                        onClick={() => selectLeague()}
                    >
                        <div className={styles.leagueButton}>All</div>
                    </div>
                </div>
            </div>

            {activeGamesByLeague.map((league, i) => (
                <div key={i}>
                    <div className={styles.leagueHeader} id={league.league}>
                        <div
                            onClick={() => selectLeague(league.league)}
                            className={styles.leagueTitle}
                            style={{ display: selectedLeague === league.league || selectedLeague === null ? 'grid' : 'none' }}
                        >
                            {league.league} games:
                        </div>
                    </div>
                    <div className={styles.cards} style={{ display: selectedLeague === league.league || selectedLeague === null ? 'grid' : 'none' }}>
                        {league.games.map((game, i) => (
                            <div className={`${styles.card} ${darkMode ? styles['cardDark'] : ''}`} key={i}>
                                <div>
                                    {game.visitor_team} @ {game.home_team} ({game.game_time})
                                </div>
                                <div>
                                    <a className={`${styles.gamesheetLink} ${darkMode ? styles['gamesheetLinkDark'] : ''}`} href={`https://lscluster.hockeytech.com/game_reports/official-game-report.php?client_code=${league.league.toLowerCase() === 'pjhl' ? 'pjhlon' : league.league.toLowerCase()}&lang=en&game_id=${game.ls_game_id}`}>Gamesheet</a>
                                </div>
                                {game.hasNoOfficials ? (
                                    <div>No officials set</div>
                                ) : (
                                    <>
                                        <div>Referee 1: {game.referee_one}</div>
                                        <div>Referee 2: {game.referee_two}</div>
                                        <div>Linesman 1: {game.linesman_one}</div>
                                        <div>Linesman 2: {game.linesman_two}</div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}