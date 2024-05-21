import {
  FlatList,
  Image,
  Pressable,
  PressableProps,
  Text,
  View,
} from 'react-native';
import {styles} from '../../styles';
import {
  SellCarBrandSelectList,
  SellCarModuleSelectList,
  brandItems,
  moduleItem,
} from './data';
import {SizeConfig} from '../../../../size';
import CheckBox from '@react-native-community/checkbox';

interface ItemProps extends PressableProps {
  title: string;
  subTitle: string;
}

export const SelectItemsHeaderComponent: React.FC<ItemProps> = ({
  title,
  subTitle,
  ...props
}) => (
  <Pressable {...props}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
      }}>
      <Text style={styles.SellTextFiledtitle}>{title}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.selectMenutitle}>{subTitle}</Text>
        <Image
          style={styles.selectMenuImg}
          source={require('../../../../../assets/product_details/drop_down.png')}
        />
      </View>
    </View>
    <View style={styles.divder} />
  </Pressable>
);

export const BrandSelectionList: React.FC<{
  selectedBrand: brandItems | null;
  onSelect: (item: brandItems) => void;
}> = ({onSelect, selectedBrand}) => {
  return (
    <FlatList
      scrollEnabled={false}
      data={SellCarBrandSelectList.data}
      keyExtractor={item => item.id.toString()}
      numColumns={3}
      renderItem={({item}) => (
        <BrandCard
          {...item}
          onSelect={onSelect}
          isSelected={selectedBrand?.id === item.id}
        />
      )}
      contentContainerStyle={{marginVertical: SizeConfig.height * 2}}
      showsVerticalScrollIndicator={false}
    />
  );
};

export const BrandCard: React.FC<
  brandItems & {isSelected: boolean; onSelect: (item: brandItems) => void}
> = ({title, images, id, onSelect, isSelected}) => {
  return (
    <Pressable
      onPress={() => onSelect({title, images, id} as brandItems)}
      style={[
        styles.brandCardContainer,
        {backgroundColor: isSelected ? '#6060EF' : '#FFFFFF'},
      ]}>
      <Image source={{uri: images[0]}} style={styles.brandImage} />
      <Text
        style={[
          styles.brandTitle,
          {color: isSelected ? '#FFFFFF' : '#000000'},
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export const ModuleSelectionList: React.FC<{
  selectedModule: moduleItem | null;
  onSelect: (item: moduleItem) => void;
}> = ({onSelect, selectedModule}) => {
  return (
    <FlatList
      scrollEnabled={false}
      data={SellCarModuleSelectList.data}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      renderItem={({item}) => (
        <ModuleCard
          {...item}
          onSelect={onSelect}
          isSelected={selectedModule?.id === item.id}
        />
      )}
      contentContainerStyle={{marginVertical: SizeConfig.height * 2}}
      showsVerticalScrollIndicator={false}
    />
  );
};

export const ModuleCard: React.FC<
  moduleItem & {isSelected: boolean; onSelect: (item: moduleItem) => void}
> = ({title, id, onSelect, isSelected}) => {
  return (
    <Pressable
      onPress={() => onSelect({title, id} as moduleItem)}
      style={[
        styles.moduleCardContainer,
        {backgroundColor: isSelected ? '#6060EF' : '#FFFFFF'},
      ]}>
      <Text
        style={[
          styles.brandTitle,
          {color: isSelected ? '#FFFFFF' : '#6D6E71'},
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

interface CustomCheckBoxProps {
  label: string;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}

export const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  label,
  value,
  onValueChange,
}) => {
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        disabled={false}
        value={value}
        onValueChange={onValueChange}
        onFillColor="#6563FF"
        onCheckColor="#6563FF"
        onTintColor={'#D9D9D9'}
        tintColors={{true: '#6563FF', false: '#D9D9D9'}}
        onAnimationType="bounce"
      />
      <Text style={styles.checkboxTextStyle}>{label}</Text>
    </View>
  );
};
