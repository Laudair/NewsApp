import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import NewsCard from '../../components/card';

const API_KEY = 'b87051b16e404e1bb92f0d59380c310d';

const Home = ({news}) => {
  console.log('news', news);

  const handleOnCardPress = article => {
    // redirect pra details
  };

  return (
    <ScrollView>
      <Text style={{fontWeight: 'bold', fontSize: 28, padding: 4}}>NEWS</Text>
      <Text>
        {news.map((article, idx) => {
          return (
            <>
              <NewsCard
                title={article.title}
                key={idx}
                image={article.urlToImage}
                date={article.publishedAt}
                author={article.author}
              />
            </>
          );
        })}
      </Text>
    </ScrollView>
  );
};

export default Home;
