import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import ButtonDefault from '../../../components/Buttons/ButtonDefault';
import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';

const BottomContainer = ({ data }) => {
  console.log(data);
  const { title, company, location, employment_type_name, tags, description } =
    data;

  const renderItem = ({ item }) => (
    <View
      style={{
        marginRight: 7,
        backgroundColor: '#ededed',
        borderRadius: 40,
        paddingHorizontal: 7,
        paddingVertical: 3,
        marginBottom: 7,
      }}
    >
      <Text
        style={{
          fontFamily: fonts[400],
          fontSize: 11,
          color: '#616161',
        }}
      >
        {item.tag.name}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 20,
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.title}>{title}</Text>
          <Image source={{ uri: company.image }} style={styles.image}></Image>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <ButtonDefault
            style={styles.applyButton}
            title={'Ansök nu'}
            textStyle={{ fontSize: 15, fontFamily: fonts[600] }}
          ></ButtonDefault>
          {['phone', 'mail', 'message-circle'].map(name => (
            <TouchableOpacity style={styles.contactIcons}>
              <FeatherIcon
                name={name}
                size={22}
                color={colors.main}
              ></FeatherIcon>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.companyName}>{company.name}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
            marginTop: 4,
          }}
        >
          <FeatherIcon
            name={'map-pin'}
            style={{ marginBottom: 4 }}
            size={15}
          ></FeatherIcon>
          <Text style={styles.address}>{location.address}</Text>
          <FeatherIcon
            name={'briefcase'}
            style={{ marginBottom: 4 }}
            size={15}
          ></FeatherIcon>
          <Text style={styles.employmentTypeName}>{employment_type_name}</Text>
        </View>

        <FlatList
          data={tags.slice(0, 3)}
          renderItem={renderItem}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={() => <Text style={styles.more}>Fler</Text>}
        ></FlatList>
        {/*tags.map((tag) => <View style={{marginRight: 7, backgroundColor: "#ededed", borderRadius: 40, paddingHorizontal: 7, paddingVertical: 3, marginBottom: 7}}><Text  style={{fontFamily: "Poppins_400Regular", fontSize: 11, color: "#616161"}}>{tag}</Text></View>)*/}
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 400,
  },
  upperContainer: {
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    marginTop: 20,
    paddingBottom: 20,
  },
  lowerContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  title: {
    fontFamily: fonts[500],
    fontSize: 18,
    color: 'black',
    width: '80%',
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  applyButton: {
    width: 150,
    height: 40,
    borderRadius: 10,
    elevation: 0,
  },
  contactIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 18,
  },
  companyName: {
    fontFamily: fonts[700],
    fontSize: 12,
    color: '#2D2D2D',
    marginRight: 10,
  },
  address: {
    fontFamily: fonts[700],
    fontSize: 12,
    color: '#2D2D2D',
    marginRight: 10,
    marginLeft: 5,
  },
  employmentTypeName: {
    fontFamily: fonts[700],
    fontSize: 12,
    marginLeft: 5,
    color: '#2D2D2D',
  },
  more: {
    fontFamily: fonts[400],
    fontSize: 11,
    color: '#616161',
    textDecorationLine: 'underline',
    marginTop: 3,
  },
  description: {
    marginTop: 10,
    fontFamily: fonts[400],
    fontSize: 13,
    flexGrow: 1,
  },
});

export default BottomContainer;
