import React, { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, StyleSheet, Text, View } from 'react-native';
import ButtonDefault from '../../components/Buttons/ButtonDefault';
import InputSearch from '../../components/TextFields/InputSearch';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import jobs_filtering from '../../graphql/queries_read/jobs_filtering/function';
import FilterSearch from './components/FilterSearch';
import ImageTop from './components/ImageTop';
import ListJobs from './components/ListJobs';

const Explore = () => {
  const headerOpacity = useRef(new Animated.Value(0)).current;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchphrase, setSearchphrase] = useState('');

  const [sokJobbButtonPressed, setSokJobbButtonPressed] =
    useState(searchphrase);

  const [tags, setTags] = useState([
    { name: 'Anställningstyp', value: 'Anställningstyp', marked: false },
    { name: 'Ort', value: 'Ort', marked: false },
    { name: 'Publiceringsdatum', value: 'Publiceringsdatum', marked: false },
    { name: 'Företag', value: 'Företag', marked: false },
    { name: 'Språk', value: 'Språk', marked: false },
  ]);

  const fetchData = async (tags, searchphrase) => {
    setLoading(true);

    const data = await jobs_filtering(tags, searchphrase);
    console.log(data);
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    console.log(tags);

    fetchData(tags, searchphrase);
  }, [tags, sokJobbButtonPressed]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: headerOpacity.interpolate({
            inputRange: [0, 220],
            outputRange: [1, 0],
          }),
        }}
      >
        <ImageTop
          source={
            'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        ></ImageTop>
      </Animated.View>

      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: headerOpacity } } }],
          { useNativeDriver: false }
        )}
        ListHeaderComponent={
          <View style={{ alignItems: 'center' }}>
            <Animated.View
              style={{
                ...styles.header,
                width: headerOpacity.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['100%', '90%'],
                }),
                height: headerOpacity.interpolate({
                  inputRange: [0, 100],
                  outputRange: [250, 220],
                }),
                opacity: headerOpacity.interpolate({
                  inputRange: [0, 150],
                  outputRange: [1, 0],
                }),
              }}
            >
              <Text style={styles.headerText}>Hitta Jobb</Text>
              <InputSearch
                placeholder={'Sökord'}
                setSearchphrase={setSearchphrase}
              ></InputSearch>

              <ButtonDefault
                style={styles.searchButton}
                textStyle={styles.searchButtonText}
                title={'Sök jobb'}
                onPress={() => setSokJobbButtonPressed(searchphrase)}
              />
            </Animated.View>

            <View style={styles.bottomContainer}>
              <FilterSearch tags={tags} setTags={setTags}></FilterSearch>
              <ListJobs data={jobs} loading={loading}></ListJobs>
            </View>
          </View>
        }
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    alignItems: 'center',
    paddingTop: 30,
  },
  headerText: {
    fontFamily: fonts[600],
    color: 'white',
    fontSize: 40,
  },
  bottomContainer: {
    marginTop: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.background,
    alignItems: 'center',
    minHeight: 400,
  },
  searchButton: {
    height: '12%',
    maxHeight: 30,
    width: '30%',
    marginTop: 20,
    maxWidth: 140,
  },
  searchButtonText: {
    fontSize: 13,
    marginTop: 3,
  },
});

export default Explore;
