import React, { useState } from 'react';
import './CandidateSearchPage.css';

const CandidateSearchPage = () => {
  const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    // Perform search logic
    // Use the location and jobRole values to search for candidates
    // Update the searchResults state with the fetched candidates

    // For demonstration purposes, let's assume a simple mock search result
    const mockResults = [
      { name: 'Candidate 1', location: 'New York', jobRole: 'Software Developer' },
      { name: 'Candidate 2', location: 'San Francisco', jobRole: 'Data Analyst' },
      { name: 'Candidate 3', location: 'Chicago', jobRole: 'UX Designer' },
      { name: 'Edmond Desi', location: 'New York', jobRole: 'Software Developer' },
      { name: 'Kelly Tasha', location: 'New York', jobRole: 'Software Developer' },
      { name: 'Tamah Donboss', location: 'New York', jobRole: 'Software Developer' },
      { name: 'John Smith', location: 'New York', jobRole: 'Software Developer' },
      { name: 'Rene Kana', location: 'New York', jobRole: 'Software Developer' },
    ];

    const filteredResults = mockResults.filter(candidate => {
      // Check if the candidate's location and job role match the search criteria
      return candidate.location.toLowerCase().includes(location.toLowerCase()) &&
        candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase());
    });

    setSearchResults(filteredResults);
  };

  return (
    <div className="candidate-search-page">
      <header>
        <h2>Candidate Search</h2>
      </header>
      <section className="search-form">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Job Role"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </section>
      <section className="search-results">
        <h3>Search Results</h3>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((candidate, index) => (
              <li key={index}>
                <strong>{candidate.name}</strong>
                <p>Location: {candidate.location}</p>
                <p>Job Role: {candidate.jobRole}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </section>
    </div>
  );
};

export default CandidateSearchPage;
