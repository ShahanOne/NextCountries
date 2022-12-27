import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../../styles/CountryPage.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Country() {
  const router = useRouter();
  const [country, setCountry] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://restcountries.com/v2/name/${router?.query?.name}?fullText=true`
      )
        .then((res) => res.json())
        .then((data) => setCountry(data[0]));
    };
    router.query.name && fetchData(); //name from url via router object
  }, [router.query]);
  // console.log(router.query);
  // console.log(country);

  return (
    <>
      <Head>
        <title>{country.name}</title>
      </Head>
      {country ? (
        <div className="container-fluid ">
          <Link href={'/'} className={`btn btn-warning ${styles.backBtn} `}>
            {' '}
            Go Back{' '}
          </Link>
          <div className={`container-fluid row ${styles.topRow} `}>
            <div className={` ${styles.imgDiv} col-lg-6`}>
              <center>
                <img src={country.flag} className={styles.infoImg} />
              </center>
            </div>
            <div className="col-lg-6 row">
              <p className={styles.infoName}>{country.name}</p>
              <div className={` ${styles.infoDiv} col-lg-6`}>
                <p className={styles.infoPara}>
                  Native Name: <span> {country.nativeName}</span>{' '}
                </p>
                <p className={styles.infoPara}>
                  Population: <span> {country.population}</span>
                </p>
                <p className={styles.infoPara}>
                  Region: <span> {country.region}</span>
                </p>
                <p className={styles.infoPara}>
                  Sub Region: <span> {country.subregion}</span>
                </p>
                <p className={styles.infoPara}>
                  Capital: <span> {country.capital}</span>
                </p>
              </div>
              <div className="col-lg-6">
                <p className={styles.infoPara}>
                  Land Area: <span>{country.area} sq. km</span>
                </p>
                <p className={styles.infoPara}>
                  Currencies:
                  {country.currencies?.map((currency, index) => (
                    <span key={index}> {currency.name} , </span>
                  ))}
                </p>
                <p className={styles.infoPara}>
                  Languages:{' '}
                  {country.languages?.map((language, index) => (
                    <span key={index}>{language.name} ,</span>
                  ))}
                </p>
              </div>
              <p className={styles.borderPara}>
                Border Countries:{' '}
                {country.borders?.map((border, index) => (
                  <button
                    key={index}
                    className={`${styles.borderButton} btn btn-dark btn-md`}
                  >
                    {border}
                  </button>
                ))}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Waiting...</p>
      )}
    </>
  );
}

//useEffect : renders everytime the router.query changes     if second parameter isnt passed useEffect will keep on rendering each second
