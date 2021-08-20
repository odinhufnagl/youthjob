import React from 'react';
import { Image, Text, View } from 'react-native';
import fonts from '../../../constants/fonts';
const List_obj = ({ data }) => {
  const { company, user, lastMessage } = data;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
        paddingLeft: 10,
      }}
    >
      <Image
        source={{ uri: company.image }}
        width={40}
        height={40}
        style={{
          width: 50,
          height: 50,
          marginRight: 15,
          resizeMode: 'contain',
        }}
      ></Image>

      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: fonts[500],
              color: 'black',
              fontSize: 15,
              marginRight: 4,
            }}
          >
            {user.name}
          </Text>
          <View
            style={{
              borderRadius: 500,
              backgroundColor: 'black',
              width: 5,
              height: 5,
            }}
          ></View>
          <Text
            style={{
              fontFamily: fonts[700],
              color: 'grey',
              fontSize: 13,
              marginLeft: 4,
            }}
          >
            {company.name}
          </Text>
        </View>
        <Text
          style={{ fontFamily: fonts[400], color: '#A8A8AB', marginTop: -5 }}
        >
          {lastMessage}
        </Text>
      </View>
    </View>
  );
};

export default List_obj;
