import React, {useState, useCallback, useEffect} from 'react';
import {Text, ScrollView, RefreshControl, FlatList} from 'react-native';
import Card from '../../components/card';
import {Item} from '../../components/card/card';
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
  const [breakingNews, setBreakingNews] = useState<[News]>();
  const isFlatList = true;

  const renderItemFlat = ({item}) => {
    return <Item item={item} />;
  };
  const renderItem = ({item}) => {
    return <Card article={item} />;
  };

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`,
      );
      setNews(response.data.articles);
    };
    const fetchBreakingNews = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`,
      );
      setBreakingNews(response.data.articles);
    };
    fetchBreakingNews();
    fetchNews();
  }, [isRefreshing]);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    wait(2000).then(() => setIsRefreshing(false));
  }, []);

  return (
    <>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginLeft: 12,
          marginTop: 4,
        }}>
        Breaking News
      </Text>
      <FlatList
        style={{height: 380}}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        horizontal
        data={breakingNews}
        renderItem={renderItemFlat}
        keyExtractor={item => item.title}
        extraData={isFlatList}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginLeft: 12,
          marginTop: 4,
        }}>
        Technology
      </Text>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        data={news}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </>
  );
};

export default Home;
