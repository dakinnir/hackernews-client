import axios from 'axios';

const hackerNewsApi = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
});

export const fetchTopStories = async () => {
  try {
    const response = await hackerNewsApi.get('/topstories.json');
    const topStoryIds = response.data.slice(0, 10); // Fetching only the top 10 stories
    const promises = topStoryIds.map(async (storyId) => {
      const storyResponse = await fetchStoryById(storyId);
      return storyResponse.data;
    });
    const stories = await Promise.all(promises);
    return stories;
  } catch (error) {
    console.error('Error fetching top stories:', error);
    throw error;
  }
};

export const fetchStoryById = async (storyId) => {
  try {
    const response = await hackerNewsApi.get(`/item/${storyId}.json`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching story with ID ${storyId}:`, error);
    throw error;
  }
};
