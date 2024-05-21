import React, {useRef, useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {SizeConfig} from '../../size';

const ImageModal = ({isVisible, onHide, data, indexNumber}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(indexNumber);
  const flatListRef = useRef();

  useEffect(() => {
    setCurrentImageIndex(indexNumber);
    if (indexNumber && flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: indexNumber,
        animated: true,
      });
    }
  }, [indexNumber]);

  const onTouchThumbnail = index => {
    setCurrentImageIndex(index);
    flatListRef.current.scrollToIndex({index, animated: true});
  };

  const getItemLayout = (_, index) => ({
    length: SizeConfig.width * 20,
    offset: SizeConfig.width * 20 * index,
    index,
  });

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      onBackButtonPress={onHide}
      onBackdropPress={onHide}
      animationIn="slideInUp"
      animationOut="slideOutDown">
      <View style={styles.container}>
        <Pressable onPress={onHide} style={styles.closeButton}>
          <Image
            style={styles.closeIcon}
            source={require('../../../assets/product_details/close.png')}
          />
        </Pressable>
        <View style={styles.fullImageContainer}>
          <Image
            source={data[currentImageIndex]}
            style={styles.fullImage}
            resizeMode="contain"
          />
        </View>
        <FlatList
          ref={flatListRef}
          horizontal
          data={data}
          initialScrollIndex={indexNumber}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => onTouchThumbnail(index)}>
              <Image
                source={item}
                style={[
                  styles.thumbnail,
                  index === currentImageIndex && styles.selectedThumbnail,
                ]}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => index.toString()}
          getItemLayout={getItemLayout}
          contentContainerStyle={styles.thumbnailContainer}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    marginVertical: SizeConfig.height * 18,
    marginHorizontal: SizeConfig.height * 2,
    borderRadius: SizeConfig.width * 3,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  thumbnailContainer: {
    position: 'absolute',
    bottom: SizeConfig.height * 5,
  },
  thumbnail: {
    width: SizeConfig.width * 20,
    height: SizeConfig.height * 10,
    marginHorizontal: SizeConfig.width,
    borderWidth: 2,
    borderColor: 'transparent',
    aspectRatio: 1,
    borderRadius: SizeConfig.width * 2,
  },
  selectedThumbnail: {
    borderColor: '#000',
  },
  fullImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SizeConfig.width * 90,
    height: SizeConfig.height * 40,
    position: 'relative',
    marginTop: SizeConfig.height * 3,
  },
  fullImage: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    objectFit: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: SizeConfig.height * 1,
    right: SizeConfig.width * 2,
    zIndex: 1,
  },
  closeIcon: {
    width: SizeConfig.width * 6,
    height: SizeConfig.height * 4,
    objectFit: 'contain',
  },
});

export default ImageModal;
