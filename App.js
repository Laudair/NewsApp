/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './src/pages/home';

import axios from 'axios';

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q=tesla&from=2021-03-23&sortBy=publishedAt&apiKey=b87051b16e404e1bb92f0d59380c310d',
      );
      /**
       * status: 'ok',
      totalResults: 16195
      se precisar eh so pegar antes do ressponse.data (response.data.status e .totalResults)
       */
      // console.log('response', response.data.articles);
      setNews(response.data.articles);
    };
    fetchNews();
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 300,
      }}>
      <Home news={news} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
