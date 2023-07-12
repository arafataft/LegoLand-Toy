import { useState, useEffect } from 'react';
import './LegoNews.css';
import { Button, Container } from 'react-bootstrap';

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

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  const handleReadMore = (articleId) => {
    const updatedNewsData = newsData.map((article) => {
      if (article.id === articleId) {
        return {
          ...article,
          expanded: !article.expanded,
        };
      }
      return article;
    });
    setNewsData(updatedNewsData);
  };

  return (
    <Container className="mt-5 pt-4">
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
                <p>
                  {article.expanded
                    ? article.description
                    : truncateText(article.description, 100)}
                </p>
                {article.description.length > 100 && (
                  <Button variant='info'
                    className="read-more-button "
                    onClick={() => handleReadMore(article.id)}
                  >
                    {article.expanded ? 'Read Less' : 'Read More'}
                  </Button>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LegoNews;
