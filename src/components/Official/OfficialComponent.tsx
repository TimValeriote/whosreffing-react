import { OfficialDetails } from "../../models/official";
import styles from './Official.module.scss';

type OfficialComponentProps = {
    officialDetails: OfficialDetails;
    darkMode: boolean;
}

export function OfficialComponent({darkMode,officialDetails} : OfficialComponentProps)  {
    const imageUrl = `https://whosreffing-assets.s3.amazonaws.com/officials/${officialDetails.first_name}_${officialDetails.last_name}.png`;
    const defaultImageUrl = "https://whosreffing-assets.s3.amazonaws.com/officials/default.png";

    return (
        <div className={`${styles.container} ${darkMode ? styles['containerDark'] : ''}`}>
            <div className={styles.refHeader}>
                <div className={styles.refBaseInfo}>
                    <div className={styles.refPhoto}>
                        <img className={styles.refInfoPhoto}
                                src={imageUrl}
                                onError={(e) => {
                                    e.currentTarget.src = defaultImageUrl;
                                }}
                        />
                    </div>
                    <div>
                        <div className={styles.refNameNumber}>
                            <div>{officialDetails.first_name} {officialDetails.last_name} #{officialDetails.jersey_number}</div>
                        </div>
                        <div className={styles.refAdditionalBaseInfo}>
                            <div>Leagues Worked: {officialDetails.official_stats.leagues.map((league, i) => (
                                                <>
                                                {league}, 
                                                </>
                                            ))}
                            </div>
                            <div>Total Games: {officialDetails.official_stats.total_games}</div>
                        </div>                    
                    </div>   
                </div>
                <div className={styles.submitPhoto}>
                    Submit a photo <a href="https://docs.google.com/forms/d/e/1FAIpQLSd1Q0IBvT99vcRHUZo8mv2AUvZNoPbpk2oRR59tIRKQx21BHw/viewform?usp=sf_link" target="_blank">here</a>
                </div>
                <div className={styles.refAdvancedStats}>
                    <div className={styles.advancedStatsInner}>
                        <div className={styles.firstBaseStats}>
                            <div>Overtime Avg: {officialDetails.official_stats.overtime_average}%</div>
                            <div>Shootout Avg: {officialDetails.official_stats.shootout_average}%</div>
                            <div>Avg Game Length: {officialDetails.official_stats.average_game_time}</div>
                            <div>Avg Goals: {officialDetails.official_stats.average_goals_per_game}</div>
                            <div>Avg Home Goals: {officialDetails.official_stats.average_home_goals_per_game}</div>
                        </div>
                        <div>
                            <div>Avg Visitor Goals: {officialDetails.official_stats.average_visitor_goals_per_game}</div>
                            <div>Avg Home Penalties: {officialDetails.official_stats.average_home_penalties_per_game}</div>
                            <div>Avg Visitor Penalties: {officialDetails.official_stats.average_visitor_penalties_per_game}</div>
                            <div>Avg Home Pims: {officialDetails.official_stats.average_home_pims_per_game}</div>
                            <div>Avg Visitor Pims: {officialDetails.official_stats.average_visitor_pims_per_game}</div>
                        </div>
                    </div>
                </div>
            </div>

            {officialDetails.games.map((league, i) => (
                <>
                <div key={i}>
                    <div key={league.league_name} className={styles.sectionHeader}>{league.league_name}</div> 
                    <div className={styles.cards}> 
                        {league.league_games.map((game, i) => (
                            <>
                            <div className={styles.card} key={i}>
                                <div>{game.game_date}, {game.visitor_team} @ {game.home_team} ({game.game_time})</div>
                                <div>Referee 1: {game.referee_one}</div>
                                <div>Referee 2: {game.referee_two}</div>
                                <div>Linesman 1: {game.linesman_one}</div>
                                <div>Linesman 2: {game.linesman_two}</div>
                            </div>
                            </>
                        ))}
                        
                    </div>
                </div>
                </>
            ))}

        </div>
    )
}