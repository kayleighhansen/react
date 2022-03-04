// import './App.css';
import ArticleList from './components/ArticleList';
import {useEffect} from 'react';
import {useState} from 'react';

function App() {

  const [ articleData, setArticleData ] = useState(null);

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

            console.log(result.value);
        })

    }).catch(err => {console.log(err)});
  }, []);

  function renderEventList() {

  console.log(articleData);

    if (articleData){
      return(
        <div>
          
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
