import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';

const Details = ({route, navigation}) => {
  // const handleOnCardPress = article => {
  //   // redirect pra details
  // };
  const {title, url, image, content, author, date} = route.params;
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={{alignItems: 'center', backgroundColor: '#fff'}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 28,
            padding: 8,
            marginLeft: 8,
            marginRight: 8,
            marginTop: 8,
          }}>
          {title}
        </Text>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontSize: 22,
            marginLeft: 22,
            marginRight: 8,
            marginTop: 8,
            color: '#999',
          }}>
          By {author}
        </Text>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontSize: 22,
            marginLeft: 22,
            marginRight: 8,
            marginTop: 8,
            color: '#999',
          }}>
          {date}
        </Text>

        <Image
          style={{width: '100%', height: 264, marginTop: 8}}
          source={{
            uri: image,
          }}
        />
        <Text
          style={{
            fontSize: 22,
            padding: 8,
            marginLeft: 8,
            marginRight: 8,
            marginTop: 8,
          }}>
          {content}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Details;
