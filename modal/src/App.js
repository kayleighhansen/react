import './App.css';

import ArticleList from './components/ArticleList';
import { useEffect } from 'react';
import { useState } from 'react';

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {

  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    setArticleData(null);
    fetch('https://hoopcamp-dev.azurewebsites.net/events/getEvents', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(data => {
      return data.json()
        .then(result => {
          setArticleData(result.value);
        })
    }).catch(err => { console.log(err) });
  }, []);

  function renderEventList() {
    if (articleData) {
      return (
        <div>
          <ArticleList events={articleData} />
        </div>
      );
    } else {
      return <div>
        <p className="loading-screen">Loading Events...</p>
      </div>
    }
  }

  return (
    <div>

      <h1 className="page-title">Upcoming Hoop Camp Events</h1>

      <div className="searchbar-container">
        <form action="" className="searchbar-form">
          <input type="text" name="search" className="searchbar-input"></input>
          <button type="submit" className="searchbar-button"><FontAwesomeIcon icon={faMagnifyingGlass} className="searchbar-icon"/></button>
        </form>
      </div>

      { articleData !== null ? renderEventList() : renderEventList() }


    </div>);

}

export default App;
