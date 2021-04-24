import React from 'react';
import {View, Image, Text} from 'react-native';

const Card = ({title, image, date, author}) => {
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
    <View style={{padding: 4, display: 'flex', flexDirection: 'row'}}>
      <View style={{display: 'flex', flexDirection: 'column'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', width: 268}}>
          {title.length < 85 ? `${title}` : `${title.substring(0, 85)}...`}
          {/* {title} */}
        </Text>
        <Text>{author}</Text>
        <Text>
          {date.substring(0, 10) === today
            ? 'Today'
            : date.substring(0, 10) === yesterday
            ? 'Yesterday'
            : `${date.substring(0, 10)}`}
        </Text>
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
