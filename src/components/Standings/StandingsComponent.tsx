import { League } from "../../models/league";
import { Standings } from "../../models/standings";
import styles from './Standings.module.scss';

type StandingsComponentProps = {
    darkMode: boolean;
    standings: Standings[];
    leagues: League[];
    onLeagueChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Event handler type
};

export function StandingsComponent({darkMode, standings, leagues, onLeagueChange}: StandingsComponentProps) {
    return (
        <div className={`${styles.container} ${darkMode ? styles['containerDark'] : ''}`}>
            <div className={styles.selector}>
                <label>Select a League:</label>
                <select onChange={onLeagueChange}>
                    {leagues.map((league) => (
                        <option key={league.id} value={String(league.id)}>{league.name}</option>
                    ))}
                </select>
            </div>
            <div className={styles.allOfficialsList}>
                {standings.map((standing) => (
                    <div key={standing.official_id} className={styles.indivStanding}>
                        <span className={styles.leftText}>
                            <a href={`/official/${standing.official_id}`}>{standing.first_name} {standing.last_name}: </a>
                        </span>
                        <span className={styles.rightText}>
                            <a>{standing.game_count}</a>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}