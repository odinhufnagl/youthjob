import React from 'react';
import { Image, Text, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';

const List_obj_users = ({ data }) => {
  const { name, image, seeker } = data;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
        paddingLeft: 40,
      }}
    >
      <Image
        source={{ uri: image }}
        width={40}
        height={40}
        style={{
          width: 50,
          height: 50,
          borderRadius: 800,
          marginRight: 15,
          resizeMode: 'cover',
        }}
      ></Image>

      <View>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{ fontFamily: fonts[600], color: 'black', fontSize: 15 }}
            >
              {name}
            </Text>
            {!seeker ? (
              <FeatherIcon
                name={'briefcase'}
                size={15}
                color={colors.main}
                style={{ marginLeft: 3, marginBottom: 3 }}
              ></FeatherIcon>
            ) : null}
          </View>

          {!seeker ? (
            <Text
              style={{
                fontFamily: fonts[700],
                color: 'grey',
                fontSize: 13,
                marginTop: -4,
              }}
            >
              {data.company.name}
            </Text>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default List_obj_users;
