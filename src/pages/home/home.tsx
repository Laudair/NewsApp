import React, {useState, useCallback, useEffect} from 'react';
import {Text, ScrollView, RefreshControl} from 'react-native';
import Card from '../../components/card';

import axios from 'axios';

const API_KEY: string = 'b87051b16e404e1bb92f0d59380c310d';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export interface News {
  title: string;
  publishedAt: string;
  content: string;
  author: string;
  urlToImage: string;
  url: string;
}

const Home: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [news, setNews] = useState<[News]>();

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`,
      );
      setNews(response.data.articles);
    };
    fetchNews();
  }, [isRefreshing]);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    wait(2000).then(() => setIsRefreshing(false));
  }, []);

  return (
    <ScrollView
      style={{backgroundColor: '#fff'}}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }>
      <Text>
        {news?.map(article => {
          return (
            <>
              <Card article={article} />
            </>
          );
        })}
      </Text>
    </ScrollView>
  );
};

export default Home;
