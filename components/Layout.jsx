import Head from 'next/head';
import TopBar from './TopBar';
import styles from '../styles/Layout.module.css';
import { useState } from 'react';
const Layout = ({ children }) => {
  const [isDark, setDark] = useState(false);
  const isDarkTheme = (arg) => {
    setDark(arg);
  };
  return (
    <>
      <Head>
        <title>Next Countries App</title>
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
          isDark ? styles.mainDark : styles.main
        }`}
      >
        <TopBar isDarkTheme={isDarkTheme} />
        {children}
      </main>
    </>
  );
};

export default Layout;
