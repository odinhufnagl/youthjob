import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Modalize } from 'react-native-modalize';
import Loading from '../../components/Loading/Loading';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import getAge from '../../global_functions/getAge';
import { AuthContext } from '../../providers/AuthProvider';
import ImageTop from '../Explore/components/ImageTop';
import Lst_info from './components/bottomContainer/Lst_info';
import CompanyModal from './components/companyModal/CompanyModal';

const Profile = () => {
  const { setCurrentUserInfo, currentUserInfo, user, logout } =
    useContext(AuthContext);
  const headerOpacity = useRef(new Animated.Value(0)).current;
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const modalizeRef = useRef();
  const [companyInModal, setCompanyInModal] = useState();
  const didMount = useRef(false);
  const [loadingTitle, setLoadingTitle] = useState('');

  const showCompanyModal = (company) => {
    setCompanyInModal(company);
    modalizeRef.current?.open();
  };

  const refresh = async (loadingTitle) => {
    setLoadingTitle(loadingTitle);
    setLoading(true);
    await setCurrentUserInfo(user.uid);
    setLoading(false);
  };

  useEffect(() => {
    refresh();
  }, []);

  if (loading) {
    return <Loading title={loadingTitle}></Loading>;
  }

  return (
    <View style={styles.container}>
      <Modalize ref={modalizeRef} modalHeight={150}>
        <CompanyModal company={companyInModal}></CompanyModal>
      </Modalize>

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
            'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1116&q=80'
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
                opacity: headerOpacity.interpolate({
                  inputRange: [0, 150],
                  outputRange: [1, 0],
                }),
              }}
            >
              <View style={styles.profilePicture_container}>
                <Image
                  source={{ uri: currentUserInfo.profile_picture }}
                  style={styles.profilePicture}
                ></Image>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Edit', {
                      title: 'Bild',
                      refresh: refresh,
                    });
                  }}
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    width: 100,
                    height: 35,
                    position: 'absolute',
                    bottom: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: fonts[700],
                      color: colors.main,
                      fontSize: 11,
                      opacity: 0.9,
                    }}
                  >
                    Ändra bild
                  </Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.headerName}>
                {currentUserInfo.first_name} {currentUserInfo.last_name}
              </Text>
              <Text style={styles.headerAge}>
                {getAge(currentUserInfo.date_of_birth)} år
              </Text>
            </Animated.View>

            <View style={styles.bottomContainer}>
              <Lst_info
                curUserInfo={currentUserInfo}
                email={user.email}
                refresh={refresh}
                showCompanyModal={showCompanyModal}
              ></Lst_info>
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

  headerName: {
    fontFamily: fonts[600],
    color: 'white',
    fontSize: 20,
  },
  headerAge: {
    fontFamily: fonts[500],
    color: 'white',
    fontSize: 15,
    marginTop: -7,
  },
  bottomContainer: {
    marginTop: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.background,
    alignItems: 'center',
    width: '100%',
    paddingBottom: 30,
  },
  profilePicture: {
    width: '100%',
    height: '100%',
    borderRadius: 500,
  },
  profilePicture_container: {
    width: 100,
    height: 100,
    borderRadius: 500,
    marginBottom: 10,
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default Profile;
