import { useState } from 'react';
import styles from '../styles/SearchStyles.module.css';

const SearchAndFilter = (props) => {
  const [isClicked, setClick] = useState(false);
  const [region, setRegion] = useState([]);

  function handleClick(event) {
    setClick((value) => !value);
    const { name } = event.target;
    if (name !== 'AllCountries') {
      props.data.filter((newArray) => {
        if (newArray.region === name) {
          setRegion((prevRegion) => [...prevRegion, newArray]);
        }
      });
    } else {
      setRegion([]);
    }
  }
  props.region(region);

  return (
    <div className="row container-fluid">
      {/* SEARCH */}
      <div className={'col-lg-6' + ` ${styles.inputDiv} `}>
        <input
          type="text"
          className={styles.inputBox}
          id="search-input"
          value={props.input}
          onChange={props.handleInput}
          placeholder="Search for a country..."
          autoComplete="none"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-secondary"
          type="submit"
          onClick={props.handleSearchClick}
          id="button-addon2"
        >
          <img src="search.svg" />
        </button>
        <br />
        <button
          className={'btn btn-secondary' + ` ${styles.button} `}
          type="submit"
          onClick={props.handleGoBack}
          id="button-addon2"
        >
          Go Back
        </button>
      </div>

      {/* FILTER */}
      <div className={'dropdown col-lg-6' + ` ${styles.dropdown} `}>
        <button className={'dropbtn' + ` ${styles.dropBtn} `} id="dropbtn">
          Filter by region
        </button>
        <div
          className={'dropdown-content' + ` ${styles.dropdownContent} `}
          id="drop-content"
        >
          {!isClicked ? (
            <div>
              <button
                className={'dropdown-item' + ` ${styles.dropdownItem} `}
                onClick={handleClick}
                name="Africa"
                type="button"
              >
                Africa
              </button>
              <button
                className={'dropdown-item' + ` ${styles.dropdownItem} `}
                onClick={handleClick}
                name="Americas"
                type="button"
              >
                Americas
              </button>
              <button
                className={'dropdown-item' + ` ${styles.dropdownItem} `}
                onClick={handleClick}
                name="Asia"
                type="button"
              >
                Asia
              </button>
              <button
                className={'dropdown-item' + ` ${styles.dropdownItem} `}
                onClick={handleClick}
                name="Europe"
                type="button"
              >
                Europe
              </button>
              <button
                className={'dropdown-item' + ` ${styles.dropdownItem} `}
                onClick={handleClick}
                name="Oceania"
                type="button"
              >
                Oceania
              </button>
            </div>
          ) : (
            <div>
              <button
                className={'dropdown-item' + ` ${styles.dropdownItem} `}
                onClick={handleClick}
                name="AllCountries"
                type="button"
              >
                All Countries
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
