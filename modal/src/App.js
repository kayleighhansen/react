import './App.css';
// import Article from './components/Article';
import ArticleList from './components/ArticleList';
import {useEffect} from 'react';
import {useState} from 'react';

function App() {

  const { articleData, setArticleData} = useState(null);

  useEffect(() => {
    fetch('http://hoopcamp-dev.azurewebsites.net/events/getEvents', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    }).then(data => {
        return data.json()
        .then(result => {
            console.log(result.value);
            
            setArticleData(result.value);
        })
    }).catch(err => {console.log(err)});
}, []);
  
  return (
    <div>
      <ArticleList events = { articleData }/>
    </div> );
}

export default App;
