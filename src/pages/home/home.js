import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import NewsCard from '../../components/card';

const API_KEY = 'b87051b16e404e1bb92f0d59380c310d';

const Home = ({news, navigation}) => {
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
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Text style={{fontWeight: 'bold', fontSize: 28, padding: 4}}>NEWS</Text>
      <Text>
        {news.map((article, idx) => {
          return (
            <>
              <NewsCard
                title={article.title}
                key={idx}
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
