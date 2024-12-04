import styles from './Info.module.scss';

export function InfoComponent() {
    return (
        <div className={styles.container}>
            <div className={styles.baseInfo}>
                <h5>Active games:</h5>
                <ul>
                    <li>The main page will show the current day's games with links to their respetive game sheets</li>
                    <li>Games are retrieved based on the current status of the officials</li>
                    <li>If no officials are provided, the site will not show them</li>
                </ul>

                <h5>Referee hub / game counts:</h5>
                <ul>
                    <li>Game counts are not 100% accurate because for most junior leagues teams handle entering officials</li>
                    <li>Some officials are not in specific leagues (mainly the PJHL) which also effects game counts</li>
                    <li>There are also some cases which officials may come up twice (often because of shortened first names)</li>
                    <li>If you wish to have yourself "mended" into 1 record, please fill out the "alter official" form below</li>
                </ul>

                <h5>Additional:</h5>
                <ul>
                    <li>If you have any ideas or comments for the site, feel free to fill out the 2nd form below</li>
                </ul>
            </div>

            <div>
                <div className={styles.ideasForm}>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScH77eCHvOX1tWuDA_u_bTatP2hnAEGM7NA8eVz3BuiY6UiXQ/viewform?embedded=true" title='mending' frameBorder={0}>Loading…</iframe>
                </div>
                <div className={styles.mendingForm}>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdAS_95AKe11DJgH0HAaoLOxJjMqEidMVizyrvEy0tFRo-zfw/viewform?embedded=true" title='ideas' frameBorder={0}>Loading…</iframe>
                </div>
            </div>
        </div>
    );
}