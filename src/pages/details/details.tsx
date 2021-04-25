import React from 'react';

import {
  Text,
  View,
  ScrollView,
  Image,
  Linking,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';

import {RootStackParamList} from './../routes/route-param-list';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'Details'>;

const Details: React.FC<Props> = ({route}) => {
  const {article} = route.params;
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const articleDate = new Date(article.publishedAt);
  const articleMonth: string = monthNames[articleDate.getMonth()];
  const articleDay: string = article.publishedAt.substring(8, 10);

  const authorName: string = article.author ? article.author : 'Unknown auhtor';

  return (
    <ScrollView style={styles.scroll}>
      <View style={{alignItems: 'center', backgroundColor: '#fff'}}>
        <Text style={styles.title} onPress={() => Linking.openURL(article.url)}>
          {article.title}
        </Text>
        <Text style={styles.smallText}>{authorName}</Text>
        <Text style={styles.smallText}>{articleMonth + ', ' + articleDay}</Text>
        {article.urlToImage && (
          <Image
            style={styles.image}
            source={{
              uri: article.urlToImage,
            }}
          />
        )}
        <Text style={styles.content}>{article.content.slice(0, -14)}</Text>
      </View>
    </ScrollView>
  );
};

export default Details;

interface Styles {
  scroll: ViewStyle;
  smallText: TextStyle;
  image: ImageStyle;
  title: TextStyle;
  content: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  scroll: {
    backgroundColor: '#fff',
  },
  smallText: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginLeft: 22,
    marginRight: 8,
    marginTop: 8,
    color: '#999',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 28,
    padding: 8,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 8,
  },

  image: {
    width: '100%',
    height: 264,
    marginTop: 8,
  },

  content: {
    fontSize: 20,
    padding: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
  },
});
