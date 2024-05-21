import React from 'react';
import {View, StyleSheet} from 'react-native';

interface PaginationProps {
  activeIndex: number;
  totalSlides: number;
}

const Pagination: React.FC<PaginationProps> = ({activeIndex, totalSlides}) => {
  return (
    <View style={styles.container}>
      {[...Array(totalSlides).keys()].map(index => (
        <View
          key={index}
          style={[
            styles.dot,
            activeIndex === index ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
  inactiveDot: {
    backgroundColor: 'lightgray',
  },
});

export default Pagination;
