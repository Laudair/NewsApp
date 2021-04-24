import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';

import Home from './../home';
import Details from './../details';

const Stack = createStackNavigator();

const Routes = () => {
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'News'}} />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
