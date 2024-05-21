import {StyleSheet} from 'react-native';
import {SizeConfig} from '../../size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SellCarConatiner: {
    flex: 1,
    paddingHorizontal: SizeConfig.width * 4,
    backgroundColor: 'f5f5f5',
  },
  appbar: {
    paddingVertical: SizeConfig.height * 2,
    flexDirection: 'row',
  },
  headerConatiner: {
    width: SizeConfig.width * 100,
    borderBottomLeftRadius: SizeConfig.width * 6,
    borderBottomRightRadius: SizeConfig.width * 6,
    height: SizeConfig.height * 30,
  },
  backgroundImg: {
    borderBottomLeftRadius: SizeConfig.width * 6,
    borderBottomRightRadius: SizeConfig.width * 6,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    opacity: 0.1,
  },
  headerBodyConatiner: {
    position: 'absolute',
    top: SizeConfig.height * 1,
    paddingHorizontal: SizeConfig.width * 5,
    width: SizeConfig.width * 100,
    flex: 1,
  },
  headerText: {
    fontSize: SizeConfig.width * 4.8,
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    textAlign: 'center',
    color: '#000',
  },
  toggleButtonConatiner: {
    backgroundColor: '#FFFFFF',
    borderRadius: SizeConfig.width * 3.5,
    borderWidth: SizeConfig.width * 0.2,
    padding: SizeConfig.width * 1,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    borderColor: 'white',
    marginVertical: SizeConfig.height * 2,
  },
  toggleButton: {
    borderRadius: SizeConfig.width * 3,
    borderWidth: SizeConfig.width * 0.2,
    paddingVertical: SizeConfig.height * 1.5,
    flex: 1,
    borderColor: '#E9E9E9',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
  },

  toggleButtonActive: {
    borderColor: '#6060EF',
    backgroundColor: '#6060EF',
  },
  toggleButtonText: {
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    fontSize: SizeConfig.width * 4.6,
    color: '#000000',
    textAlign: 'center',
  },
  toggleButtonTextActive: {
    color: '#FFFFFF',
  },
  stepsTextImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    overflow: 'hidden',
  },
  stepsTextConatiner: {
    width: SizeConfig.width * 30,
    height: SizeConfig.width * 20,
    position: 'absolute',
    top: SizeConfig.height * -1.5,
  },
  bodyConatiner: {
    width: SizeConfig.width * 100,
    paddingHorizontal: SizeConfig.width * 5,

    paddingVertical: SizeConfig.height * 3,
  },
  whyBuyText: {
    fontFamily: 'Outfit-Medium',
    fontWeight: '400',
    fontSize: SizeConfig.width * 3.8,
    color: '#000000',
  },
  whyBuyContainer: {
    borderColor: '#E9E9E9',
    borderWidth: SizeConfig.width * 0.3,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: SizeConfig.width * 2,
    paddingVertical: SizeConfig.height * 3,
    borderRadius: SizeConfig.width * 4,
    marginTop: SizeConfig.height * 1.2,
    marginBottom: SizeConfig.height * 1.2,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  whyBuyImageConatiner: {
    width: SizeConfig.width * 16,
    height: SizeConfig.width * 16,
    objectFit: 'contain',
  },
  whyBuyTextCards: {
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    fontSize: SizeConfig.width * 3.9,
    color: '#000000',
  },
  whyBuySubText: {
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: SizeConfig.width * 3.5,
    color: '#8A8A8A',
    paddingTop: SizeConfig.height * 2,
  },

  buyUsedcontainer: {
    flex: 1,
    flexDirection: 'row',
  },
  buyUsedCarsHeader: {
    paddingHorizontal: SizeConfig.width * 5,
    paddingVertical: SizeConfig.width * 2.5,
  },
  chooseBuyText: {
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: SizeConfig.width * 4.8,
    color: '#000000',
    textAlign: 'center',
    paddingTop: SizeConfig.height * 1.2,
    left: SizeConfig.width * 3,
  },

  chooseModelConatiner: {
    borderColor: '#D7D7D7',
    flex: 1,
    width: SizeConfig.width * 100,
    borderTopLeftRadius: SizeConfig.width * 4,
    borderTopRightRadius: SizeConfig.width * 4,
    borderWidth: SizeConfig.width * 0.25,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  leftContainer: {
    width: '33%',
    borderRightWidth: SizeConfig.width * 0.25,
    borderColor: '#D7D7D7',
  },
  rightContainer: {
    flex: 1,
    padding: SizeConfig.width * 2,
  },
  itemContainer: {
    padding: SizeConfig.width * 4.5,
    borderBottomWidth: SizeConfig.width * 0.25,
    borderBottomColor: '#D7D7D7',
    backgroundColor: '#F8F4FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContainerText: {
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    fontSize: SizeConfig.width * 3.8,
    color: '#666666',
  },
  selectedItem: {
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '600',
    fontSize: SizeConfig.width * 3.8,
    color: '#6563FF',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  vectorSectedIcon: {
    width: SizeConfig.width * 2,
    height: SizeConfig.width * 2,
    objectFit: 'contain',
  },
  brandItemConatiner: {},
  gridItemContainer: {
    alignItems: 'center',
    padding: SizeConfig.width * 4,
    flex: 1,
    marginLeft: SizeConfig.width * 1.5,
    marginRight: SizeConfig.width * 1.5,
    marginBottom: SizeConfig.height * 1.5,
  },
  brandGridItemText: {
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '700',
    fontSize: SizeConfig.width * 4,
    color: '#000000',
  },
  brandGridItemImage: {
    width: SizeConfig.width * 20,
    height: SizeConfig.width * 20,
    objectFit: 'contain',
    marginBottom: SizeConfig.height,
  },
  chipcard: {
    paddingHorizontal: SizeConfig.width * 5,
    paddingVertical: SizeConfig.height * 2,
    borderColor: '#E3DDDD',
    borderWidth: SizeConfig.width * 0.3,
    borderRadius: SizeConfig.width * 3,
    marginBottom: SizeConfig.height * 1.2,
  },
  chipcardYear: {
    paddingHorizontal: SizeConfig.width * 10,
    paddingVertical: SizeConfig.height * 2,
    borderColor: '#E3DDDD',
    borderWidth: SizeConfig.width * 0.3,
    borderRadius: SizeConfig.width * 3,
    marginBottom: SizeConfig.height * 1.2,
    marginRight: SizeConfig.width * 2,
    flex: 1,
  },
  confromHeader: {
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    fontSize: SizeConfig.width * 4.3,
    color: '#000000',
  },
  confromContainer: {
    paddingHorizontal: SizeConfig.width * 5,
    paddingTop: SizeConfig.height * 1.5,
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  prefrenceConatiner: {
    borderRadius: SizeConfig.width * 3.5,
    paddingHorizontal: SizeConfig.width * 5,
    paddingVertical: SizeConfig.height * 1.5,
    backgroundColor: '#FFFFFF',
    marginVertical: SizeConfig.height * 1.5,
  },
  preferenceItem: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    margin: SizeConfig.width * 1,
    padding: SizeConfig.width * 2,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  preferenceName: {
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: SizeConfig.width * 3.5,
    color: '#000000',
    marginLeft: SizeConfig.width * 3.8,
  },
  preferenceIcon: {
    marginTop: SizeConfig.height * 0.2,
    width: SizeConfig.width * 3.5,
    height: SizeConfig.width * 3.5,
    objectFit: 'contain',
  },
  preferenceButtonConatiner: {
    paddingHorizontal: SizeConfig.width * 19,
    paddingVertical: SizeConfig.height * 1,
  },
  preferenceButton: {
    backgroundColor: '#EBEBEB',
    paddingVertical: SizeConfig.height * 2,
    paddingHorizontal: SizeConfig.width * 3,
    borderRadius: SizeConfig.width * 3.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C9C6C6',
    borderWidth: SizeConfig.width * 0.25,
    elevation: 0,
  },
  preferenceButtonText: {
    color: '#6060EF',
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: SizeConfig.width * 4.5,
  },
  Submitbutton: {
    backgroundColor: '#6060EF',
    paddingVertical: SizeConfig.height * 2.5,
    paddingHorizontal: SizeConfig.width * 5,
    borderRadius: SizeConfig.width * 4,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  submitbuttonText: {
    color: '#FFFFFF',
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: SizeConfig.width * 4.5,
  },
  prefernceBodyHeader: {
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: SizeConfig.width * 4.5,
    color: '#000000',
    paddingVertical: SizeConfig.height,
  },
  prefernceFieldConatiner: {
    borderRadius: SizeConfig.width * 3.5,
    paddingHorizontal: SizeConfig.width * 5.5,
    paddingVertical: SizeConfig.height * 1.8,
    borderWidth: SizeConfig.width * 0.3,
    borderColor: '#E3DDDD',
    backgroundColor: '#FFFFFF',
    marginVertical: SizeConfig.height * 1,
  },
  addressFiledConatiner: {
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: SizeConfig.width * 3.8,
    paddingTop: SizeConfig.height * 1,
    color: '#8A8A8A',
  },
  textFiledtitle: {
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: SizeConfig.width * 4.2,
    paddingTop: SizeConfig.height * 1,
    color: '#000',
    marginBottom: SizeConfig.height,
  },
  textFiledInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: SizeConfig.width * 0.3,
    borderColor: '#E3DDDD',
    borderRadius: SizeConfig.width * 3,
    paddingHorizontal: SizeConfig.width * 3,
    paddingVertical: SizeConfig.height * 1,
    backgroundColor: '#FFFFFF',
  },
  stepperContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SizeConfig.height * 3,
  },
  stepeInActiveCicle: {
    width: SizeConfig.width * 2.5,
    height: SizeConfig.width * 2.5,
    borderRadius: SizeConfig.width * 2.5,
    backgroundColor: '#6563FF',
    borderColor: '#6563FF',
  },
  stepeActiveCicle: {
    width: SizeConfig.width * 6,
    height: SizeConfig.width * 6,
    borderRadius: SizeConfig.width * 6,
    backgroundColor: '#f5f5f5',
    borderColor: '#8484DF',
    borderWidth: SizeConfig.width * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperImg: {
    width: SizeConfig.width * 6,
    height: SizeConfig.width * 6,
    objectFit: 'contain',
  },
  line: {
    width: SizeConfig.width * 18,
    height: SizeConfig.height * 0.18,
    backgroundColor: '#D9D9D9',
    marginHorizontal: SizeConfig.width * 3,
  },
  contentContainer: {
    flex: 1,
  },
  stepContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  stepperHeader: {
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    fontSize: SizeConfig.width * 4.5,
    paddingTop: SizeConfig.height * 1,
    color: '#000000',
    paddingBottom: SizeConfig.height * 1,
  },
  stepperBody: {
    borderRadius: SizeConfig.width * 3,
    borderColor: '#DBDBDB',
    borderWidth: SizeConfig.width * 0.3,
    padding: SizeConfig.width * 3,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  SellTextFiledtitle: {
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    fontSize: SizeConfig.width * 4.3,
    color: '#23006F',
    paddingLeft: SizeConfig.width * 2,
  },
  SellTextFiledContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: SizeConfig.width * 0.3,
    borderColor: '#DBDBDB',
    borderRadius: SizeConfig.width * 2,
    paddingHorizontal: SizeConfig.width * 3,
    paddingVertical: SizeConfig.height * 1,
    backgroundColor: '#F2F2F2',
    marginTop: SizeConfig.height,
  },
  selectMenuImg: {
    width: SizeConfig.width * 4.5,
    height: SizeConfig.width * 4.5,
    objectFit: 'contain',
    overflow: 'hidden',
    marginTop: SizeConfig.height * 0.3,
  },
  divder: {
    width: '100%',
    height: SizeConfig.height * 0.1,
    backgroundColor: '#D9D9D9',
    marginTop: SizeConfig.height * 2,
    marginBottom: SizeConfig.height * 2,
  },
  selectMenutitle: {
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: SizeConfig.width * 3.5,
    color: '#6D6E71',
    paddingRight: SizeConfig.width * 1.2,
  },
  brandCardContainer: {
    flex: 1,
    maxWidth: '28%',
    alignItems: 'center',
    margin: SizeConfig.width * 2,
    shadowColor: '#000000',
    shadowOffset: {width: -10, height: -10},
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 5,
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: SizeConfig.width * 3,
    overflow: 'hidden',
    paddingTop: SizeConfig.height * 2,
    paddingBottom: SizeConfig.height * 1,
  },
  brandImage: {
    width: SizeConfig.width * 20,
    height: SizeConfig.width * 10,
    objectFit: 'contain',
  },
  brandTitle: {
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    fontSize: SizeConfig.width * 3.4,
    color: '#000000',
    paddingVertical: SizeConfig.height,
  },
  selectedBrandCardContainer: {
    backgroundColor: 'blue',
  },
  moduleCardContainer: {
    flex: 1,
    maxWidth: '45%',
    alignItems: 'center',
    margin: SizeConfig.width * 2,
    shadowColor: '#000000',
    shadowOffset: {width: -10, height: -10},
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 4,
    backgroundColor: '#F2F2F2',
    borderColor: '#DBDBDB',
    borderRadius: SizeConfig.width * 3,
    overflow: 'hidden',
    paddingTop: SizeConfig.height * 2,
    paddingBottom: SizeConfig.height * 1,
    borderWidth: SizeConfig.width * 0.3,
  },
  selectSlotCardContainer: {
    flex: 1,
    maxWidth: '45%',
    alignItems: 'center',
    margin: SizeConfig.width * 2,
    shadowColor: '#000000',
    shadowOffset: {width: -10, height: -10},
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 1,
    backgroundColor: '#F2F2F2',
    borderColor: '#DBDBDB',
    borderRadius: SizeConfig.width * 3,
    overflow: 'hidden',
    paddingTop: SizeConfig.height * 2,
    paddingBottom: SizeConfig.height * 1,
    borderWidth: SizeConfig.width * 0.3,
  },

  textFieldTitle: {
    fontFamily: 'Outfit-Bold',
    fontWeight: '800',
    fontSize: SizeConfig.width * 4,
    color: '#23006F',
    paddingLeft: SizeConfig.width * 2,
  },
  textFieldContainer: {
    marginBottom: SizeConfig.height,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: SizeConfig.width * 6,
    borderTopLeftRadius: SizeConfig.width * 4,
    borderTopRightRadius: SizeConfig.width * 4,
    paddingVertical: SizeConfig.height * 6,
  },

  modalTitle: {
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    fontSize: SizeConfig.width * 4.5,
    color: '#000000',
  },

  buttonConatiner: {
    backgroundColor: '#6060EF',
    paddingVertical: SizeConfig.height * 2,
    paddingHorizontal: SizeConfig.width * 5,
    borderRadius: SizeConfig.width * 3.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    flex: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
  },
  addressbuttonConatiner: {
    backgroundColor: '#6060EF',
    paddingVertical: SizeConfig.height * 1.5,
    paddingHorizontal: SizeConfig.width * 5,
    borderRadius: SizeConfig.width * 3.5,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
  },
  addressTextContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E8E8E8',
    borderRadius: SizeConfig.width * 3,
    padding: SizeConfig.height * 2,
    borderWidth: SizeConfig.width * 0.3,
    marginBottom: SizeConfig.height * 1.25,
  },

  addressTitle: {
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: SizeConfig.width * 4.2,
    color: '#8A8A8A',
  },

  addressBody: {
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: SizeConfig.width * 3.6,
    color: '#8A8A8A',
    paddingTop: SizeConfig.height * 0.2,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SizeConfig.width * 6,
    marginBottom: SizeConfig.height * 2,
  },
  checkboxTextStyle: {
    color: '#6D6E71',
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: SizeConfig.width * 4.2,
    marginLeft: SizeConfig.width * 4,
  },

  confromationDateConatiner: {
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
    width: '100%',
    paddingVertical: SizeConfig.height * 2,
  },

  pickdateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SizeConfig.height * 1.5,
  },

  addressSlectedText: {
    fontSize: SizeConfig.width * 3.5,
    color: '#000',
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '700',
    paddingVertical: SizeConfig.height,
  },

  yearSelectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  selectedItemImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  yearSelectionConatiner: {
    flex: 1,
  },
  yearTextSelection: {
    color: '#000000',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    fontSize: SizeConfig.width * 4,
    paddingHorizontal: SizeConfig.width * 2,
    paddingVertical: SizeConfig.height,
  },
});