import './App.css';

import ArticleList from './components/ArticleList';
import { useEffect } from 'react';
import { useState } from 'react';

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {

  // set articleData 
  const [articleData, setArticleData] = useState(null);
  const [filteredArticleData, setFilteredArticleData] = useState(null);
  const [displayArticleData, setDisplayArticleData] = useState(null);
  

  let state = { inputValue: '' };

  let change = handleChange.bind(this);
  let submit = handleSubmit.bind(this);

  // fetch data, set to articleData
  useEffect(() => {
    setArticleData(null);
    setDisplayArticleData(null);
    fetch('https://hoopcamp-dev.azurewebsites.net/events/getEvents', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(data => {
      return data.json()
        .then(result => {

          let date = new Date('01 Jan 2022 00:00:00 GMT').getTime();
          let articles = [];

          result.value.forEach((item) => {

            const database_date = new Date(item.new_starttime);

            if(database_date > date) {
              articles.push(item);
            };
          }); 
          setArticleData(articles);
          setDisplayArticleData(articles);
        });
    }).catch(err => { console.log(err) });
  }, [])

  function renderEventList() {
    if (displayArticleData) {
      return (
        <div>
          <ArticleList events={displayArticleData} />
        </div>
      );
    } else {
      return <div>
        <p className="loading-screen">Loading Events...</p>
      </div>
    }
  }

  function handleChange(event) {
    console.log(event.target.value);
    let filteredArray = [];
    articleData.forEach((article)=> {

      if(article.msnfp_name.toLowerCase().includes(event.target.value)) {
        filteredArray.push(article);
      };
    
    });
    console.log(filteredArray);
    setFilteredArticleData(filteredArray);
    setDisplayArticleData(filteredArray)

    if(event.target.value == null) {
      setFilteredArticleData(null);

      setDisplayArticleData(articleData);
    }
  }

  function handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  return (
    <div>

      <h1 className="page-title">Upcoming Hoop Camp Events</h1>

      <div className="searchbar-container">
        <form action="" className="searchbar-form">
          <input type="text" name="search" className="searchbar-input" value={ state.value } onChange={handleChange}></input>
          <button type="button" className="searchbar-button" ><FontAwesomeIcon icon={faMagnifyingGlass} className="searchbar-icon"/></button>
        </form>
      </div>

      { articleData !== null ? renderEventList() : renderEventList() }

    </div>);
}

export default App;
