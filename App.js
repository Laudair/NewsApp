import React, {useState, useEffect} from 'react';
import {Text, View, StatusBar} from 'react-native';
import Home from './src/pages/home';
import Routes from './src/pages/routes';

import axios from 'axios';

const App = () => {
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     const response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b87051b16e404e1bb92f0d59380c310d',
  //     );
  //     setNews(response.data.articles);
  //   };
  //   fetchNews();
  // }, []);

  return (
    // <View
    //   style={{
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     paddingTop: 70,
    //   }}>
    //   <Home news={news} />
    // </View>
    <Routes />
  );
};

export default App;
