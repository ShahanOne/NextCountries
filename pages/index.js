import { Imprima, Inter } from '@next/font/google';
import CountryCard from '../components/CountryCard.jsx';
import TopBar from '../components/TopBar';
import SearchAndFilter from '../components/SearchAndFilter';
import { useState } from 'react';
import styles from '../styles/Layout.module.css';

export default function Home({ countries }) {
  const [isDark, setDark] = useState(false);
  const [searchedCountry, setSearchedCountry] = useState('');
  const [input, setInput] = useState('');
  const [region, setRegion] = useState([]);

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
      <SearchAndFilter
        input={input}
        data={countries}
        handleInput={handleInput}
        handleSearchClick={handleSearchClick}
        handleGoBack={handleGoBack}
        region={handleRegion}
      />
      {searchedCountry ? (
        <div className="row container-fluid">
          <CountryCard country={searchedCountry} />
        </div>
      ) : region.length === 0 ? (
        <div className={'row container-fluid' + ` ${styles.cardsParent} `}>
          {countries.map((countryCard, index) => (
            <CountryCard key={index} country={countryCard} />
          ))}
        </div>
      ) : (
        <div className={'row container-fluid' + ` ${styles.cardsParent} `}>
          {region.map((countryCard, index) => (
            <CountryCard key={index} country={countryCard} />
          ))}
        </div>
      )}
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
