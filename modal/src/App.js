// import './App.css';
import ArticleList from './components/ArticleList';
import {useEffect} from 'react';
import {useState} from 'react';

function App() {

  const [ articleData, setArticleData ] = useState(null);

  useEffect(() => {
    setArticleData(null);
    fetch('http://hoopcamp-dev.azurewebsites.net/events/getEvents', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    }).then(data => {
        return data.json()
        .then(result => {  
            setArticleData(result.value);

            console.log(result.value);
        })

    }).catch(err => {console.log(err)});
  }, []);

  function renderEventList() {

  console.log(articleData);

    if (articleData){
      return(
        <div>
          <h1>Upcoming Events</h1>
          <ArticleList events = { articleData }/>
        </div>
      );
    } else {
      return <p>Loading Events...</p>
    }
  }


  return (
    <div>
      {articleData !== null ? renderEventList() : renderEventList()}
    </div> );
  
}

export default App;
