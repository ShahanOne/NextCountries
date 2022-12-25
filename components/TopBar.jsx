import { useState } from 'react';
import styles from '../styles/TopBar.module.css';

function TopBar({ isDarkTheme }) {
  const [isDark, setDark] = useState(false);

  function handleTheme() {
    !isDark ? setDark(true) : setDark(false); //    setDark(!isDark);
    isDarkTheme(isDark);
  }
  return (
    <div className={isDark ? styles.card : styles.cardDark}>
      <p className={styles.whereto}> Where To?</p>
      <button onClick={handleTheme} className={styles.button}>
        {!isDark ? 'Light' : 'Dark'}
      </button>
    </div>
  );
}

export default TopBar;
