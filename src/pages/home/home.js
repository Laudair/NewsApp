import React, {useState, useCallback, useEffect} from 'react';
import {Text, View, ScrollView, RefreshControl} from 'react-native';
import Card from '../../components/card';

import axios from 'axios';

const API_KEY = 'b87051b16e404e1bb92f0d59380c310d';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b87051b16e404e1bb92f0d59380c310d',
      );
      setNews(response.data.articles);
    };
    fetchNews();
  }, [refreshing]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  let day = new Date();
  let today =
    day.getFullYear() +
    '-' +
    '0' +
    parseInt(day.getMonth() + 1) +
    '-' +
    day.getDate();

  let yesterday =
    day.getFullYear() +
    '-' +
    '0' +
    parseInt(day.getMonth() + 1) +
    '-' +
    (day.getDate() - 1);

  return (
    <ScrollView
      style={{backgroundColor: '#fff'}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Text style={{fontWeight: 'bold', fontSize: 28, padding: 4}}>NEWS</Text>
      <Text>
        {news.map(article => {
          return (
            <>
              <Card
                title={article.title}
                key={article.title}
                image={article.urlToImage}
                date={
                  article.publishedAt.substring(0, 10) === today
                    ? 'Today'
                    : article.publishedAt.substring(0, 10) === yesterday
                    ? 'Yesterday'
                    : `${article.publishedAt.substring(0, 10)}`
                }
                author={article.author}
                url={article.url}
                content={article.content}
              />
            </>
          );
        })}
      </Text>
    </ScrollView>
  );
};

export default Home;
