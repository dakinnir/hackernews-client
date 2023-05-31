import React, { useEffect } from 'react'
import { fetchTopStories } from '../services/newsApi';

const News = () => {

  // News array
  const [news, setNews] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stories = await fetchTopStories();
        // Update news stories state
        setNews(stories)
      } catch (error) {
        console.error('Error fetching top stories:', error);
        // Handle the error, such as displaying an error message
      }
    };
  
    fetchData();
  }, []);

  console.log(news)
  return (
    <div>
      <h1>Hacker News</h1>

    </div>
  )
}

export default News