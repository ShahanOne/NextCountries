import Head from 'next/head';
import Image from 'next/image';
import { Imprima, Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import CountryCard from '../components/CountryCard.jsx';
import TopBar from '../components/TopBar';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ countries }) {
  const [isDark, setDark] = useState(false);

  const isDarkTheme = (arg) => {
    setDark(arg);
  };

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
      <main className={!isDark ? styles.main : styles.mainDark}>
        <TopBar isDarkTheme={isDarkTheme} />
        <div className="row">
          {countries.map((countryCard, index) => (
            <CountryCard
              className={!isDark ? styles.countryCardDark : ''}
              key={index}
              country={countryCard}
            />
          ))}
        </div>
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
