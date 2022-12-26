import Head from 'next/head';
import Image from 'next/image';
import { Imprima, Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import CountryCard from '../components/CountryCard.jsx';
import TopBar from '../components/TopBar';
import SearchAndFilter from '../components/SearchAndFilter';
import { useState } from 'react';

export default function Home({ countries }) {
  const [isDark, setDark] = useState(false);
  const [searchedCountry, setSearchedCountry] = useState('');
  const [input, setInput] = useState('');
  const [region, setRegion] = useState([]);

  const isDarkTheme = (arg) => {
    setDark(arg);
  };

  function handleInput(event) {
    const { value } = event.target;
    setInput(value);
  }

  function handleSearchClick() {
    countries.filter((searchedCountry) => {
      if (
        searchedCountry.name ===
        input.charAt(0).toUpperCase() + input.slice(1)
      ) {
        setSearchedCountry(searchedCountry);

        // console.log(searchedCountry);
      } else if (!input) {
        setSearchedCountry('');
      }
    });
  }
  function handleGoBack() {
    setSearchedCountry('');
    setInput('');
    // console.log(searchedCountry);
  }

  function handleRegion(arg) {
    setRegion(arg);
  }

  return (
    <>
      <Head>
        <title>Countries Next App</title>
        <meta name="description" content="Countries Api" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        />
      </Head>
      <main
        className={`"container-fluid" ${
          !isDark ? styles.main : styles.mainDark
        }`}
      >
        <TopBar isDarkTheme={isDarkTheme} />
        <SearchAndFilter
          input={input}
          data={countries}
          handleInput={handleInput}
          handleSearchClick={handleSearchClick}
          handleGoBack={handleGoBack}
          region={handleRegion}
          // click={handleClick}
        />
        {searchedCountry ? (
          <div className="row container-fluid">
            <CountryCard
              country={searchedCountry}
              className={!isDark ? styles.countryCardDark : ''}
            />
          </div>
        ) : region.length === 0 ? (
          <div className={'row container-fluid' + ` ${styles.cardsParent} `}>
            {countries.map((countryCard, index) => (
              <CountryCard
                className={!isDark ? styles.countryCardDark : ''}
                key={index}
                country={countryCard}
              />
            ))}
          </div>
        ) : (
          <div className={'row container-fluid' + ` ${styles.cardsParent} `}>
            {region.map((countryCard, index) => (
              <CountryCard
                className={!isDark ? styles.countryCardDark : ''}
                key={index}
                country={countryCard}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

//this runs on build time
export const getStaticProps = async () => {
  const res = await fetch(`https://restcountries.com/v2/all`);
  const countries = await res.json();

  return {
    props: {
      countries, //named it countries
    },
  };
};

// USE CONTEXT HOOK/ Context API
