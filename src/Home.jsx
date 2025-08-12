import { useState } from 'react';
import './Home.css';
import './index.css';

function Home() {
  const apiBaseUrl = "https://en.wikipedia.org/w/api.php";
  const articleBaseUrl = "https://en.wikipedia.org/wiki/";

  // Store multiple articles in an array
  const [randomArticles, setRandomArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRandomArticle = () => {
    setLoading(true);
    const url = `${apiBaseUrl}?origin=*&action=query&format=json&list=random&rnnamespace=0&rnlimit=1`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const article = data.query.random[0];
        // Append new article to array
        setRandomArticles(prevArticles => [article, ...prevArticles])
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="Header">
        <h1>Throw-Article</h1>
        <ol>
          <li>login/logout</li>
          <li>settings</li>
          <li>chats</li>
          <li>about</li>
        </ol>
      </div>

      <div className="search-content">
        <button onClick={fetchRandomArticle}>Random</button>
      </div>

      {loading && <p>Loading random article...</p>}

      <div className="randomCardsContainer">
        {randomArticles.map((article, index) => (
          <div className="randomwebCard" key={index}>
            <h2>{article.title}</h2>
            <p>
              <strong>Link:</strong>
            </p>
            <strong>
              <a
                href={`${articleBaseUrl}${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Wikipedia
              </a>
            </strong>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
