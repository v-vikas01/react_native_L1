interface ListItem {
  id: number;
  title: string;
}

const checkListData: ListItem[] = [
  {id: 1, title: 'Title 1'},
  {id: 2, title: 'Title 2'},
  {id: 3, title: 'Title 3'},
  {id: 4, title: 'Title 4'},
  {id: 5, title: 'Title 5'},
  {id: 6, title: 'Title 6'},
];

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {SizeConfig} from './size';

interface ListItems {
  id: number;
  title: string;
}

const CheckboxList = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  console.log(selectedItems);

  const renderItem = (item: ListItems) => {
    const isSelected = selectedItems.includes(item.id);
    return (
      <View key={item.id} style={[styles.itemContainer]}>
        <Text style={styles.textItem}>{item.title}</Text>
        <CheckBox
          disabled={false}
          value={isSelected}
          onValueChange={() => toggleItem(item.id)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkboxConatiner}>
        {checkListData.map(renderItem)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SizeConfig.width * 5,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  checkboxConatiner: {
    width: '80%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SizeConfig.width * 5,
    marginBottom: SizeConfig.height * 1,
    justifyContent: 'space-between',
  },
  textItem: {
    marginRight: SizeConfig.width * 10,
    fontSize: SizeConfig.width * 4,
  },
});

export default CheckboxList;
