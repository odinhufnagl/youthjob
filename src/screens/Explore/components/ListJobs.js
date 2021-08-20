import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder';
import fonts from '../../../constants/fonts';

const CardJob = ({ data }) => {
  const navigation = useNavigation();
  const { title, location, employment_type_name, tags, company, description } =
    data;

  console.log(data, 'hello');

  return (
    <View style={stylesCard.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('Job', { data: data });
        }}
      >
        <View style={{ flexDirection: 'row', marginBottom: 8 }}>
          <View style={{ width: '100%', paddingRight: 20 }}>
            <Text style={stylesCard.title}>{title}</Text>
            <Text style={stylesCard.companyName}>{company.name}</Text>
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
              <Text style={stylesCard.location}>{location?.city}</Text>
              <FeatherIcon
                name={'briefcase'}
                style={{ marginBottom: 4 }}
                size={15}
              ></FeatherIcon>
              <Text style={stylesCard.employmentType}>
                {employment_type_name}
              </Text>
            </View>

            <FlatList
              data={tags.slice(0, 3)}
              keyExtractor={(item, index) => 'key:' + index}
              renderItem={({ item }) => (
                <View style={stylesCard.tagContainer}>
                  <Text style={stylesCard.tagName}>{item.tag.name}</Text>
                </View>
              )}
              horizontal
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              ListFooterComponent={() => (
                <Text style={stylesCard.moreText}>Fler</Text>
              )}
            ></FlatList>
            {/*tags.map((tag) => <View style={{marginRight: 7, backgroundColor: "#ededed", borderRadius: 40, paddingHorizontal: 7, paddingVertical: 3, marginBottom: 7}}><Text  style={{fontFamily: "Poppins_400Regular", fontSize: 11, color: "#616161"}}>{tag}</Text></View>)*/}
            <Text style={stylesCard.description} numberOfLines={6}>
              {description}
            </Text>
          </View>

          <Image
            source={{ uri: company.image }}
            style={stylesCard.image}
          ></Image>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const stylesCard = StyleSheet.create({
  container: {
    width: '90%',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    borderColor: '#4688D4',
    borderWidth: 1,
    elevation: 4,
  },
  title: {
    fontFamily: fonts[500],
    fontSize: 18,
    marginTop: 18,
    color: 'black',
    width: '80%',
  },
  companyName: {
    fontFamily: fonts[700],
    fontSize: 12,
    color: '#2D2D2D',
    marginRight: 10,
  },
  location: {
    fontFamily: fonts[700],
    fontSize: 12,
    color: '#2D2D2D',
    marginRight: 10,
    marginLeft: 5,
  },
  employmentType: {
    fontFamily: fonts[700],
    fontSize: 12,
    marginLeft: 5,
    color: '#2D2D2D',
  },
  tagContainer: {
    marginRight: 7,
    backgroundColor: '#ededed',
    borderRadius: 40,
    paddingHorizontal: 7,
    paddingVertical: 3,
    marginBottom: 7,
  },
  tagName: {
    fontFamily: fonts[400],
    fontSize: 11,
    color: '#616161',
  },
  moreText: {
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
  image: {
    height: 40,
    width: 40,
    position: 'absolute',
    right: 18,
    top: 18,
    resizeMode: 'cover',
  },
});

const ListJobs = ({ data, loading }) => {
  console.log(data);

  if (loading) {
    return (
      <View style={stylesListLoading.container}>
        <Placeholder style={stylesListLoading.placeholder} Animation={Fade}>
          <PlaceholderLine style={stylesListLoading.line1}></PlaceholderLine>
          <PlaceholderLine style={stylesListLoading.line2} />
          <PlaceholderLine style={stylesListLoading.line3} />
          <PlaceholderLine style={stylesListLoading.line4} />
        </Placeholder>
      </View>
    );
  }

  if (data.length == 0) {
    return <Text style={stylesListLoading.noResult}>Inget resultat</Text>;
  }

  return (
    <FlatList
      style={{ width: '100%', alignItems: 'center' }}
      data={data}
      renderItem={({ item }) => {
        return <CardJob data={item}></CardJob>;
      }}
      keyExtractor={(item, index) => 'key:' + index}
      showsVerticalScrollIndicator={false}
    ></FlatList>
  );
};

const stylesListLoading = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    alignItems: 'center',
  },
  placeholder: {
    width: '90%',
    borderRadius: 20,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#4688d4',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop: 5,
    marginBottom: 20,
  },
  line1: {
    position: 'absolute',
    top: 18,
    right: 18,
    width: 40,
    height: 40,
  },
  line2: {
    marginTop: 18,
    width: '70%',
    height: 25,
    borderRadius: 10,
  },
  line3: {
    width: '30%',
    height: 15,
    borderRadius: 10,
  },
  line4: { width: '80%', height: 120, borderRadius: 10 },
  noResult: { fontFamily: fonts[600], fontSize: 18, marginTop: 40 },
});

export default ListJobs;
