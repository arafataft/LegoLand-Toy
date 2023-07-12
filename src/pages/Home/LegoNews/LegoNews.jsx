import { useState, useEffect } from 'react';
import './LegoNews.css'
import { Container } from 'react-bootstrap';

const LegoNews = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch('/newsData.json');
        if (response.ok) {
          const data = await response.json();
          setNewsData(data);
        } else {
          console.log('Error fetching news data');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <Container className='mt-5 pt-4'>
        <div className="lego-news-container">
      <h2 className="lego-news-title pb-5">Lego News</h2>
      <div className="news-articles">
        {newsData.map((article) => (
          <div key={article.id} className="news-article">
            <div className="article-image">
              <img src={article.imageUrl} alt={article.title} />
            </div>
            <div className="article-content">
              <h3>{article.title}</h3>
              <p>{article.date}</p>
              <p>{article.description}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Container>
  );
};

export default LegoNews;
