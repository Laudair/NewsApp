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

const Card: React.FC<Props> = props => {
  const navigation = useNavigation<navigateHome>();
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
  const screen = Dimensions.get('window');

  const articleDate = new Date(props.article.publishedAt);
  const articleMonth: string = monthNames[articleDate.getMonth()];
  const articleDay: string = props.article.publishedAt.substring(8, 10);

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

        <Text>{articleMonth + ', ' + articleDay}</Text>
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
