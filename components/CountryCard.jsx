import styles from '../styles/CardStyles.module.css';
import Image from 'next/image';
import Link from 'next/link';

function CountryCard({ country }) {
  return (
    <Link
      className={styles.link}
      href="country/[name]"
      as={`/country/${country.name}`}
    >
      <div className={`"col-lg-6" ${styles.card}`}>
        <img className={styles.image} src={country.flag} />
        <p className={styles.name}>{country.name}</p>
        <p className={styles.para}>Population : {country.population}</p>
        <p className={styles.para}>Region : {country.region}</p>
        <p className={styles.para}>Capital : {country.capital}</p>
      </div>
    </Link>
  );
}

export default CountryCard;
