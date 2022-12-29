import styles from '../styles/CardStyles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from './TopBar';
import { useState } from 'react';

function CountryCard({ country }) {
  const [isDark, setDark] = useState(false);

  const isDarkTheme = (arg) => {
    setDark(arg);
  };
  //   console.log(isDark);

  return (
    <>
      {/* Just for theme data */}
      {/* <div className={styles.nodisplay}>
        <TopBar isDarkTheme={isDarkTheme} />
      </div> */}
      {/* --------- */}
      <Link
        className={'col-md-6' + ` ${!isDark ? styles.card : styles.cardDark} `}
        href="country/[name]"
        as={`/country/${country.name}`}
      >
        <div>
          <Image
            className={styles.image}
            src={country.flag}
            height={160}
            width={160}
            alt="country-flag"
          />

          <p className={styles.name}>{country.name}</p>
          <p className={styles.para}>Population : {country.population}</p>
          <p className={styles.para}>Region : {country.region}</p>
          <p className={styles.para}>Capital : {country.capital}</p>
        </div>
      </Link>
    </>
  );
}

export default CountryCard;
