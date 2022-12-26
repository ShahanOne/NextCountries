import { useState } from 'react';

const SearchAndFilter = (props) => {
  return (
    <div>
      <div className="search-div input-group">
        <input
          type="text"
          className="form-control search-input"
          id="search-input"
          value={props.input}
          onChange={props.handleInput}
          placeholder="Search for a country..."
          autoComplete="none"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-secondary go-btn"
          type="submit"
          onClick={props.handleSearchClick}
          id="button-addon2"
        >
          <img src="search.svg" />
        </button>
        <button
          className="btn btn-secondary go-btn"
          type="submit"
          onClick={props.handleGoBack}
          id="button-addon2"
        >
          Go Back{' '}
        </button>
      </div>
    </div>
  );
};

export default SearchAndFilter;
