import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { View } from 'react-native-animatable';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import fonts from '../../../constants/fonts';
const FilterModal = ({
  data,
  modalVisible,
  setModalVisible,
  applyFilter,
  curFilter,
}) => {
  return (
    <View>
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={stylesModal.container}>
          <View style={stylesModal.modal}>
            <FlatList
              data={data}
              keyExtractor={(item, index) => 'key:' + index}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    applyFilter(curFilter, item);
                    setModalVisible(false);
                  }}
                >
                  <View style={stylesModal.modalItem}>
                    <Text style={stylesModal.modalItemText}>{item}</Text>
                  </View>
                </TouchableOpacity>
              )}
            ></FlatList>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const stylesModal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modal: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 4,
    paddingTop: 12.5,
    paddingBottom: 12.5,
  },
  modalItem: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 0,
    paddingLeft: 20,
  },
  modalItemText: {
    fontFamily: fonts[400],
    fontSize: 20,
    color: 'black',
  },
});

const CardFilterSearch = ({ title, marked }) => {
  return (
    <View
      style={[
        stylesCard.container,
        { backgroundColor: marked ? '#8c8c8c' : '#e4e2e0' },
      ]}
    >
      <View style={stylesCard.innerContainer}>
        <Text
          style={{
            ...{ color: marked ? 'white' : 'black' },
            ...stylesCard.title,
          }}
        >
          {title}
        </Text>
        {marked ? (
          <FeatherIcon
            name={'x'}
            size={20}
            style={{ color: 'white' }}
          ></FeatherIcon>
        ) : (
          <AntDesignIcon
            name={'caretdown'}
            style={{ marginBottom: 2 }}
          ></AntDesignIcon>
        )}
      </View>
    </View>
  );
};

const stylesCard = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 14,
    marginLeft: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts[600],
    fontSize: 12,
    marginRight: 5,
  },
});

const FilterSearch = ({ tags, setTags }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [modalCurFilter, setModalCurFilter] = useState('');

  const changeTagValue = (name, value, marked) => {
    const tagsCopy = [...tags];
    tagsCopy.forEach((element) => {
      if (element.name == name) {
        element.value = value;
        element.marked = marked;
      }
    });
    setTags(tagsCopy);
  };

  const applyFilter = (curFilter, tagName) => {
    changeTagValue(curFilter, tagName, true);
  };

  const resetTag = (name) => {
    changeTagValue(name, name, false);
  };

  const showModal = (title) => {
    setModalCurFilter(title);

    switch (title) {
      case 'Anställningstyp':
        setModalData(['Deltid', 'Heltid', 'Sommarjobb', 'Flexibelt']);
        break;

      case 'Ort':
        setModalData(['Göteborg', 'Stockholm', 'Malmö']);
        break;

      case 'Publiceringsdatum':
        setModalData([
          'Senaste 24 timmarna',
          'Senaste 3 dagarna',
          'Senaste 7 dagarna',
          'Senaste 14 dagarna',
        ]);
        break;
      case 'Företag':
        setModalData(['Burger King', 'McDonalds', 'Odins business']);
        break;

      case 'Språk':
        setModalData(['Svenska', 'Engelska']);
        break;
    }

    setModalVisible(true);
  };

  return (
    <View style={stylesFilter.container}>
      <FilterModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={modalData}
        applyFilter={applyFilter}
        curFilter={modalCurFilter}
      ></FilterModal>

      <FlatList
        keyExtractor={(item, index) => 'key:' + index}
        contentContainerStyle={{ alignItems: 'center' }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tags}
        renderItem={({ item }) => (
          //item.name = name of the filter for example, "Anställningstyp",
          //item.value = current name of tag for example , "Anställningstyp" or "deltid"

          <TouchableOpacity
            onPress={() => {
              item?.marked ? resetTag(item.name) : showModal(item.name);
            }}
          >
            <CardFilterSearch
              title={item?.value}
              marked={item?.marked}
            ></CardFilterSearch>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
};

const stylesFilter = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    marginBottom: 10,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default FilterSearch;
