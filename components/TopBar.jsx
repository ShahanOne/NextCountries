import { useState } from 'react';
import styles from '../styles/TopBar.module.css';

function TopBar({ isDarkTheme }) {
  const [isDark, setDark] = useState(true);

  function handleTheme() {
    isDark ? setDark(false) : setDark(true); //    setDark(!isDark);
  }
  isDarkTheme(isDark);

  return (
    <div className={isDark ? styles.cardDark : styles.card}>
      <p className={styles.whereto}> Where To?</p>
      <button onClick={handleTheme} className={styles.button}>
        {isDark ? 'Light' : 'Dark'}
      </button>
    </div>
  );
}

export default TopBar;
