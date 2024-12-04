import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { Dispatch, SetStateAction } from 'react';
import logo from '../../assets/logo.png';
import { useSearchOfficials } from "../../state/useSearchOfficials";

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const NavBar = ({ darkMode, setDarkMode }: Props) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const officials = useSearchOfficials(searchTerm);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible((prev) => !prev);
  };

  return (
    <div className={`${styles.background} ${mobileMenuVisible ? styles.mobileMenuActive : ''}`}>
      <div className={styles.logoContainer}>
        <Link className={styles.homeLink} to="">
          <img src={logo} alt="Logo" className={`${styles.logoImage}`}/>
        </Link>
        <div className={styles.menuIcon} onClick={toggleMobileMenu}>
            <div className={`${styles.bar} ${mobileMenuVisible ? styles.bar1Active : ''}`} />
            <div className={`${styles.bar} ${mobileMenuVisible ? styles.bar2Active : ''}`} />
            <div className={`${styles.bar} ${mobileMenuVisible ? styles.bar3Active : ''}`} />
        </div>
      </div>

      {mobileMenuVisible && (
        <div className={styles.navBarSearchBase}>
          <div className={styles.searchheader}>
            <input
              type="text"
              id="searchTerm"
              onChange={handleSearchChange}
              placeholder="Search for Officials"
            />
            </div>

            {officials && officials.length > 0 && (
              <div className={styles.refSearchResults}>
                {officials.map((official, i) => (
                  <div key={i} className={styles.indivResult}>
                    <a href={`/official/${official.id}`} className={styles.resultText}>
                      {official.first_name} {official.last_name} #{official.jersey_number}: {official.leagues}
                    </a>
                  </div>
                ))}
              </div>
            )}
          
        </div>
      )}


      <div className={`${styles.otherLinks} ${mobileMenuVisible ? styles.mobileMenuLinks : ''}`}>
            {/* Add the links here */}
            <Link className={styles.link} to='/referees' onClick={toggleMobileMenu}>
                Find Officials
            </Link>
            <Link className={styles.link} to='/standings' onClick={toggleMobileMenu}>
                Standings
            </Link>
            <a href="https://whosreffing.deco-apparel.com/" className={styles.link}>Store</a>
            <Link className={styles.link} to='/info' onClick={toggleMobileMenu}>
                Info
            </Link>
        </div>
    </div>
  );
};


export default NavBar;


/*
<Link className={styles.link} to='/previous-games'>
                Previous Games
            </Link>
*/