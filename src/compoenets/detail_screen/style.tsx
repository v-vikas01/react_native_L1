import {StyleSheet} from 'react-native';
import {SizeConfig} from '../../size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingTop: SizeConfig.width * 2.5,
  },
  arrow_back: {
    objectFit: 'contain',
    width: SizeConfig.width * 6,
    height: SizeConfig.height * 6,
  },
  drop_down_img: {
    objectFit: 'contain',
    width: SizeConfig.width * 6,
    height: SizeConfig.height * 3,
  },
  header: {
    fontSize: SizeConfig.width * 4.8,
    color: '#1E1E1E',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: SizeConfig.height * 1.5,
  },
  subheader: {
    fontSize: SizeConfig.width * 3.8,
    color: '#1E1E1E',
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: SizeConfig.width,
  },
  productImages: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  bodyHeader: {
    color: '#000000',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    fontSize: SizeConfig.width * 4.8,
    paddingHorizontal: SizeConfig.width * 6.8,
  },
  variationConatiner: {
    marginHorizontal: SizeConfig.width * 4,
    borderColor: '#DBDBDB',
    borderWidth: SizeConfig.width * 0.35,
    paddingVertical: SizeConfig.height * 1.4,
    paddingHorizontal: SizeConfig.width * 3.5,
    marginVertical: SizeConfig.width * 2.5,
    borderRadius: SizeConfig.width * 3.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  variationText: {
    color: '#000000',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    fontSize: SizeConfig.width * 4,
    width: '90%',
  },
  circle: {
    width: SizeConfig.width * 14,
    height: SizeConfig.width * 14,
    borderRadius: SizeConfig.width * 7,
    borderColor: '#DDDDDD',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: SizeConfig.width * 2.5,
  },
  selectedCircle: {
    borderColor: 'black',
    width: SizeConfig.width * 16,
    height: SizeConfig.width * 16,
    borderRadius: SizeConfig.width * 8,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal: SizeConfig.width * 1.5,
  },
  image: {
    width: '100%',
    height: SizeConfig.width * 16,
    objectFit: 'contain',
    borderRadius: SizeConfig.width * 9,
  },
  priceContainer: {
    flexDirection: 'row',
    paddingLeft: SizeConfig.width * 6.8,
    paddingRight: SizeConfig.width * 4.5,
    marginVertical: SizeConfig.height * 1,
    justifyContent: 'space-between',
  },
  PriceText: {
    fontSize: SizeConfig.width * 7,
    color: '#000000',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    paddingVertical: SizeConfig.width,
    textAlign: 'left',
  },
  PriceSubText: {
    fontSize: SizeConfig.width * 4,
    color: '#000000',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    textAlign: 'left',
  },
  calculaterConatiner: {
    borderRadius: SizeConfig.width * 3.5,
    paddingVertical: SizeConfig.width * 3,
    paddingHorizontal: SizeConfig.width * 3,
    width: SizeConfig.width * 16,
    alignItems: 'center',
    backgroundColor: '#8E8E90',
  },
  calculaterText: {
    fontSize: SizeConfig.width * 3.2,
    color: '#F2F2F2',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    paddingTop: SizeConfig.width * 1,
  },
  calculaterImg: {
    objectFit: 'contain',
    width: SizeConfig.width * 5,
    height: SizeConfig.width * 5,
  },
  buttonConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SizeConfig.width * 5,
    marginVertical: SizeConfig.height * 2,
  },
  truncatedTextConatiner: {
    paddingHorizontal: SizeConfig.width * 6.8,
    marginBottom: SizeConfig.height * 1.5,
  },
  specificationsConatiner: {
    paddingHorizontal: SizeConfig.width * 5,
    marginTop: SizeConfig.height * 1.5,
    marginBottom: SizeConfig.height * 1.5,
  },
  buttonFlexConatiner: {
    paddingVertical: SizeConfig.width * 4,
    paddingHorizontal: SizeConfig.width * 3,
    borderRadius: SizeConfig.width * 4,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    flex: 1,
  },
  buttonTextStyle: {
    color: 'white',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: SizeConfig.width * 4,
  },
});
