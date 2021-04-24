import React from 'react';
import {View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Card = ({title, image, date, author, url, content}) => {
  const navigation = useNavigation();

  return (
    <View style={{padding: 4, display: 'flex', flexDirection: 'row'}}>
      <View style={{display: 'flex', flexDirection: 'column'}}>
        <Text
          style={{fontSize: 18, fontWeight: 'bold', width: 268}}
          accessibilityRole="button"
          accessible={true}
          onPress={() =>
            navigation.navigate('Details', {
              title: title,
              image: image,
              date: date,
              content: content,
              author: author,
              url: url,
            })
          }>
          {title.length < 85 ? `${title}` : `${title.substring(0, 85)}...`}
          {/* {title} */}
        </Text>
        <Text>{author}</Text>
        <Text>{date}</Text>
      </View>
      <Image
        style={{width: 106, height: 118, borderRadius: 4}}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

export default Card;
