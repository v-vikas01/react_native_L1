import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Animated,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {SizeConfig} from '../../../size';
import BackButton from '../../reuse_component/reuse_component';
import {styles} from '../styles';
import {SubitBuyUsedCarsScreenNavigationProp} from '../../../types';
import {useNavigation} from '@react-navigation/native';
import {HederTypes, ItemType, slectedtypes, types} from './data';

const BuyUsedScreen = () => {
  const [selectedMainTypeIndex, setSelectedMainTypeIndex] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: ItemType['items'][number] | null | string;
  }>({});
  const [animatedValue] = useState(new Animated.Value(0));
  const navigationSubitBuyUsedCarsScreen =
    useNavigation<SubitBuyUsedCarsScreenNavigationProp>();
  const [fromYear, setFromYear] = useState<string | null>(null);
  const [toYear, setToYear] = useState<string | null>(null);
  const [showYearSelection, setShowYearSelection] = useState(false);
  const prevSelectedMainTypeIndexRef = useRef<number>(selectedMainTypeIndex);
  const [Year, setYear] = useState<string | null>(null);

  const handleMainTypeSelection = (index: number) => {
    setSelectedMainTypeIndex(index);
    setShowYearSelection(index === 4);
  };
  useEffect(() => {
    console.log(selectedMainTypeIndex);
  }, [selectedMainTypeIndex]);

  const handleItemSelection = (item: ItemType['items'][number]) => {
    setSelectedItems(prevState => {
      const currentMainType =
        types[selectedMainTypeIndex].mainType.toLowerCase();
      const updatedState = {...prevState};
      const selectedMainTypeItem = updatedState[currentMainType];
      if (selectedMainTypeItem === item) {
        return updatedState;
      }
      for (let i = selectedMainTypeIndex + 1; i < HederTypes.length; i++) {
        updatedState[types[i].mainType.toLowerCase()] = null;
        setFromYear(null);
        setToYear(null);
      }
      updatedState[currentMainType] = item;

      setSelectedMainTypeIndex(prevIndex =>
        Math.min(prevIndex + 1, HederTypes.length - 1),
      );

      const updatedSlectedTypes = slectedtypes.map(type => {
        const selectedItem = updatedState[type.mainType.toLowerCase()];
        if (selectedItem) {
          return {
            ...type,
            selectedName: (
              selectedItem as {id: number; name: string; logo: any}
            ).name,
          };
        }
        return type;
      });

      const allItemsSelected = Object.values(updatedState).every(
        value => value !== null,
      );

      if (allItemsSelected) {
        navigationSubitBuyUsedCarsScreen.navigate('SubitBuyUsedCarsScreen', {
          data: updatedSlectedTypes,
        });
      }

      return updatedState;
    });
  };
  const handleYearSelection = (type: 'from' | 'to', year: string) => {
    if (type === 'from') {
      setFromYear(year);

      if (toYear && parseInt(toYear) < parseInt(year)) {
        setToYear(year);
      }
    } else {
      if (parseInt(year) >= parseInt(fromYear || '')) {
        setToYear(year);
      } else {
        return;
      }
    }

    setSelectedItems(prevState => {
      const updatedState = {...prevState};

      if (type === 'to' && fromYear) {
        const yearRange = `${fromYear}-${year}`;
        updatedState.year = yearRange;
        setYear(yearRange);

        const yearItem = {id: 1, name: yearRange, logo: undefined};
        handleItemSelection(yearItem);
      }

      return updatedState;
    });
  };

  useEffect(() => {
    if (selectedMainTypeIndex !== prevSelectedMainTypeIndexRef.current) {
      setFromYear(null);
      setToYear(null);

      prevSelectedMainTypeIndexRef.current = selectedMainTypeIndex;
    }
  }, [selectedMainTypeIndex]);

  return (
    <View style={{flex: 1}}>
      <StatusBar animated backgroundColor="#f5f5f5" barStyle="dark-content" />
      <SafeAreaView style={[styles.container, {backgroundColor: '#f5f5f5'}]}>
        <View style={styles.buyUsedCarsHeader}>
          <View style={{flexDirection: 'row'}}>
            <BackButton />
            <Text style={[styles.headerText, {textAlign: 'center', flex: 1}]}>
              BUY USED CAR
            </Text>
          </View>
          <Text style={styles.chooseBuyText}>
            Choose Your {HederTypes[selectedMainTypeIndex].name}
          </Text>
        </View>
        <View style={styles.chooseModelConatiner}>
          <View style={styles.buyUsedcontainer}>
            <View style={styles.leftContainer}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={HederTypes}
                scrollEnabled={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() => handleMainTypeSelection(index)}
                    disabled={
                      index > selectedMainTypeIndex &&
                      !selectedItems[types[index - 1].mainType.toLowerCase()]
                    }>
                    <View
                      style={[
                        styles.itemContainer,
                        {
                          backgroundColor:
                            selectedMainTypeIndex === index
                              ? '#FFFFFF'
                              : '#F8F4FF',
                        },
                      ]}>
                      <Text
                        style={[
                          styles.itemContainerText,
                          selectedMainTypeIndex === index &&
                            styles.selectedItem,
                          {
                            color:
                              selectedItems[item.mainType.toLowerCase()] != null
                                ? '#6563FF'
                                : selectedMainTypeIndex === index
                                ? '#000000'
                                : '#666666',
                            fontFamily: 'Outfit-Medium',
                            fontWeight: '500',
                            fontSize: SizeConfig.width * 3.8,
                          },
                        ]}
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        {(
                          selectedItems[item.mainType.toLowerCase()] as {
                            id: number;
                            name: string;
                            logo: any;
                          }
                        )?.name || item.name}
                      </Text>
                      {selectedMainTypeIndex === index && (
                        <View style={{paddingTop: SizeConfig.height * 0.5}}>
                          <Image
                            style={styles.vectorSectedIcon}
                            source={require('../../../../assets/buy_sell/Vector.png')}
                          />
                        </View>
                      )}
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <ScrollView style={styles.rightContainer} scrollEnabled={true}>
              {selectedMainTypeIndex < HederTypes.length &&
                selectedMainTypeIndex !== 4 && (
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    data={types[selectedMainTypeIndex].items}
                    key={`flatlist-${selectedMainTypeIndex}`}
                    keyExtractor={item => item.id.toString()}
                    numColumns={selectedMainTypeIndex === 0 ? 2 : 1}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => handleItemSelection(item)}>
                        <View>
                          {selectedMainTypeIndex === 0 && (
                            <View style={styles.gridItemContainer}>
                              <Image
                                style={styles.brandGridItemImage}
                                source={item.logo}
                              />
                              <Text
                                style={{
                                  color:
                                    selectedItems[
                                      types[
                                        selectedMainTypeIndex
                                      ].mainType.toLowerCase()
                                    ] === item
                                      ? '#6563FF'
                                      : '#000000',
                                  fontFamily: 'Outfit-Medium',
                                  fontWeight: '500',
                                  fontSize: SizeConfig.width * 3.5,
                                }}>
                                {selectedMainTypeIndex === 0 ? item.name : null}
                              </Text>
                            </View>
                          )}
                          {selectedMainTypeIndex !== 0 &&
                            selectedMainTypeIndex !== 4 && (
                              <View
                                style={[
                                  styles.chipcard,
                                  {
                                    backgroundColor:
                                      selectedItems[
                                        types[
                                          selectedMainTypeIndex
                                        ].mainType.toLowerCase()
                                      ] === item
                                        ? '#D7D7D7'
                                        : '#FFFFFF',
                                  },
                                ]}>
                                <Text
                                  style={{
                                    color:
                                      selectedItems[
                                        types[
                                          selectedMainTypeIndex
                                        ].mainType.toLowerCase()
                                      ] === item
                                        ? '#6563FF'
                                        : '#000000',
                                    fontFamily: 'Outfit-Medium',
                                    fontWeight: '500',
                                    fontSize: SizeConfig.width * 3.5,
                                  }}>
                                  {item.name}
                                </Text>
                              </View>
                            )}
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                )}
              {selectedMainTypeIndex === 4 && (
                <View style={styles.yearSelectionConatiner}>
                  <Text style={styles.yearTextSelection}>
                    Choose Year Range : {Year}
                  </Text>
                  <View>
                    <Text style={styles.yearTextSelection}>From :</Text>
                    <FlatList
                      data={types[selectedMainTypeIndex].items}
                      scrollEnabled={false}
                      numColumns={2}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          onPress={() =>
                            handleYearSelection('from', item.name)
                          }>
                          <View
                            style={[
                              styles.chipcardYear,
                              {
                                backgroundColor:
                                  fromYear === item.name
                                    ? '#D7D7D7'
                                    : '#FFFFFF',
                              },
                            ]}>
                            <Text
                              style={{
                                color:
                                  fromYear === item.name
                                    ? '#6563FF'
                                    : '#000000',
                                fontFamily: 'Outfit-Medium',
                                fontWeight: '500',
                                fontSize: SizeConfig.width * 3.5,
                              }}>
                              {item.name}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      )}
                      keyExtractor={item => item.id.toString()}
                    />
                  </View>
                  <View>
                    <Text style={styles.yearTextSelection}>To :</Text>
                    <FlatList
                      data={types[selectedMainTypeIndex].items}
                      scrollEnabled={false}
                      numColumns={2}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          onPress={() => handleYearSelection('to', item.name)}>
                          <View
                            style={[
                              styles.chipcardYear,
                              {
                                backgroundColor:
                                  toYear === item.name ? '#D7D7D7' : '#FFFFFF',
                              },
                            ]}>
                            <Text
                              style={{
                                color:
                                  toYear === item.name ? '#6563FF' : '#000000',
                                fontFamily: 'Outfit-Medium',
                                fontWeight: '500',
                                fontSize: SizeConfig.width * 3.5,
                              }}>
                              {item.name}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      )}
                      keyExtractor={item => item.id.toString()}
                    />
                  </View>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BuyUsedScreen;
