import { OfficialInfo } from "../../models/official";
import styles from './FindOfficial.module.scss';

type FindOfficialsComponentProps = {
    searchedOfficials: OfficialInfo[];
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    darkMode: boolean;
}

export function FindOfficialsComponent({ darkMode, searchedOfficials, onSearchChange }: FindOfficialsComponentProps) {
    return (
        <div className={`${styles.container} ${darkMode ? styles['containerDark'] : ''}`}>
        <div className={styles.searchheader}>
            <input
                type="text"
                id="searchTerm"
                onChange={onSearchChange}
                placeholder="Search for Officials"
            />
        </div>
        <div className={styles.officialResults}>
            {searchedOfficials && searchedOfficials.length > 0 && (
                <div className={styles.mainSearchContents}>
                    {searchedOfficials.map((official, i) => (
                        <div key={i} className={styles.indivResult}>
                            <a href={`/official/${official.id}`} className={styles.resultText}>
                                {official.first_name} {official.last_name} #{official.jersey_number}
                            </a>
                            <a href={`/official/${official.id}`} className={styles.resultText}>
                                {official.leagues}
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
      </div>
    );
}