import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
  Dimensions,
} from 'react-native';
import {News} from './../../pages/home/home';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './../../pages/routes/route-param-list';
import {useNavigation} from '@react-navigation/native';

type navigateHome = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  article: News;
}

export const filterDate = date => {
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

  const articleDate = new Date(date);
  const articleMonth: string = monthNames[articleDate.getMonth()];
  const articleDay: string = date.substring(8, 10);

  return articleMonth + ', ' + articleDay;
};

export const Item = ({item}) => {
  const navigation = useNavigation<navigateHome>();
  const navigateToDetails = () => {
    navigation.navigate('Details', {
      article: item,
    });
  };

  return (
    <View
      style={{
        width: 220,
        margin: 8,
        backgroundColor: '#eaeaea',
        borderRadius: 8,
      }}>
      {item.urlToImage && (
        <Image
          style={{
            width: 220,
            height: 118,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
          source={{
            uri: item.urlToImage,
          }}
        />
      )}
      <Text
        style={{color: 'black', fontWeight: 'bold', margin: 8}}
        onPress={() => navigateToDetails()}>
        {item.title}
      </Text>
    </View>
  );
};
const Card: React.FC<Props> = props => {
  const navigation = useNavigation<navigateHome>();

  const screen = Dimensions.get('window');

  const navigateToDetails = () => {
    navigation.navigate('Details', {
      article: props.article,
    });
  };

  const authorName: string = props.article.author
    ? props.article.author
    : 'Unknown auhtor';

  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <Text
          style={[styles.title, {width: screen.width - 142}]}
          numberOfLines={3}
          ellipsizeMode="tail"
          onPress={() => navigateToDetails()}>
          {props.article.title}
        </Text>
        <Text
          style={{
            width: screen.width - 142,
            marginTop: 'auto',
          }}>
          {authorName}
        </Text>

        <Text>{filterDate(props.article.publishedAt)}</Text>
      </View>
      {props.article.urlToImage ? (
        <Image
          style={styles.image}
          source={{
            uri: props.article.urlToImage,
          }}
        />
      ) : (
        <Image
          style={styles.image}
          source={require('./../../image/no-image.png')}
        />
      )}
    </View>
  );
};

export default Card;

interface Styles {
  container: ViewStyle;
  card: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 8,
    marginTop: 8,
    marginRight: 4,
  },

  card: {
    padding: 4,
    display: 'flex',
    flexDirection: 'row',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  image: {
    width: 116,
    height: 118,
    borderRadius: 4,
    marginTop: 12,
  },
});
