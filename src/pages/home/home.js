import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Card from '../../components/card';

const API_KEY = 'b87051b16e404e1bb92f0d59380c310d';

const Home = ({news}) => {
  console.log('news', news);

  const handleOnCardPress = article => {
    // redirect pra details
  };

  return (
    <Text>
      {news.map(article => {
        return (
          <>
            <Card title={article.title} />
          </>
        );
      })}
    </Text>
  );
};

export default Home;
