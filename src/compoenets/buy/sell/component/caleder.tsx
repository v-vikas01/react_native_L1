// import {
//   View,
//   Text,
//   Image,
//   Pressable,
//   LayoutAnimation,
//   StyleSheet,
//   TouchableOpacity,
//   TouchableNativeFeedback,
//   ScrollView,
//   Modal,
//   TextInput,
// } from 'react-native';
// import React, {useState, useEffect} from 'react';
// import {styles} from '../../styles';
// import TextField from '../../component/textfiled';
// import {SizeConfig} from '../../../../size';
// import {
//   BrandSelectionList,
//   ModuleSelectionList,
//   SelectItemsHeaderComponent,
// } from './helper';
// import {
//   SellCarBrandSelectList,
//   SellCarModuleSelectList,
//   brandItems,
//   moduleItem,
// } from './data';
// import Snackbar from 'react-native-snackbar';
// import {Calendar} from 'react-native-calendars';
// import dayjs from 'dayjs';

// const VehicleComponent: React.FC = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [selectedBrand, setSelectedBrand] = useState<brandItems | null>(null);
//   const [isModuleExpanded, setModuleIsExpanded] = useState(false);
//   const [selectedModule, setSelectedModule] = useState<moduleItem | null>(null);
//   const [selected, setSelected] = useState('');
//   const [customDate, setCustomDate] = useState(dayjs());
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [years, setYears] = useState<number[]>([]);

//   useEffect(() => {
//     const currentYear = dayjs().year();
//     const generatedYears = [];
//     for (let i = currentYear; i > currentYear - 100; i--) {
//       generatedYears.push(i);
//     }
//     setYears(generatedYears);
//   }, []);

//   const formatDateString = (date: dayjs.Dayjs): string => {
//     return date.format('YYYY-MM-DD');
//   };

//   const toggleBrandExpansion = () => {
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//     setIsExpanded(prev => !prev);
//     if (isExpanded) {
//       setModuleIsExpanded(false);
//     }
//   };

//   const handleNameChange = (text: string) => {};

//   const handleValidation = (text: string) => {
//     return /^[a-zA-Z ]+$/.test(text);
//   };

//   const handleModulePress = () => {
//     if (!selectedBrand) {
//       Snackbar.show({
//         text: 'Please select a Brand',
//         backgroundColor: '#6060EF',
//         duration: Snackbar.LENGTH_SHORT,
//       });
//     } else {
//       LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//       setIsExpanded(false);
//       setModuleIsExpanded(true);
//     }
//   };

//   const handleBrandSelect = (brand: brandItems) => {
//     setSelectedBrand(brand);
//     setIsExpanded(false);
//     setSelectedModule(null);
//     setModuleIsExpanded(true);
//   };

//   const handleModuleSelect = (module: moduleItem) => {
//     setSelectedModule(module);
//     setModuleIsExpanded(false);
//   };

//   const handleYearSelect = (year: number) => {
//     setCustomDate(prev => prev.year(year));
//     setIsModalVisible(false);
//   };

//   return (
//     <View style={{flex: 1, alignItems: 'center'}}>
//       <Text style={styles.stepperHeader}>Vehicle Details</Text>
//       <View style={styles.stepperBody}>
//         <TextField
//           title="Vehicle Reg. Number"
//           placeholder="Enter Reg. Number"
//           keyboardType="default"
//           onChangeText={handleNameChange}
//           validation={handleValidation}
//           textStyle={styles.SellTextFiledtitle}
//           conatinerStyle={styles.SellTextFiledContainer}
//         />
//         <SelectItemsHeaderComponent
//           title="Brand"
//           subTitle={selectedBrand ? selectedBrand.title : 'Select Brand'}
//           onPress={toggleBrandExpansion}
//         />
//         {isExpanded && (
//           <BrandSelectionList
//             selectedBrand={selectedBrand}
//             onSelect={handleBrandSelect}
//           />
//         )}
//         <SelectItemsHeaderComponent
//           title="Module"
//           subTitle={selectedModule ? selectedModule.title : 'Select Module'}
//           onPress={handleModulePress}
//         />
//         {isModuleExpanded && (
//           <ModuleSelectionList
//             selectedModule={selectedModule}
//             onSelect={handleModuleSelect}
//           />
//         )}
//         <TextField
//           title="Variant"
//           placeholder="Enter Variant"
//           keyboardType="default"
//           onChangeText={handleNameChange}
//           validation={handleValidation}
//           textStyle={styles.SellTextFiledtitle}
//           conatinerStyle={styles.SellTextFiledContainer}
//         />
//         <Pressable onPress={() => setIsModalVisible(true)}>
//           <TextField
//             title="Year of Registration"
//             placeholder="Enter Year"
//             keyboardType="default"
//             // value='2021'
//             // editable={false}
//             onChangeText={handleNameChange}
//             validation={handleValidation}
//             textStyle={styles.SellTextFiledtitle}
//             conatinerStyle={styles.SellTextFiledContainer}
//             icons={require('../../../../../assets/buy_sell/calendar.png')}
//           />
//         </Pressable>
//         <TextInput
//           placeholder="Enter Year"
//           value={customDate.year().toString()}
//           editable={false}
//           style={{flex: 1, height: 40}}
//         />
//         <Calendar
//           renderHeader={date => (
//             <Pressable hitSlop={100} onPress={() => setIsModalVisible(true)}>
//               <View>
//                 <Text>
//                   {dayjs(date).format('MMMM')} {dayjs(date).year()}
//                 </Text>
//               </View>
//             </Pressable>
//           )}
//           onPressArrowLeft={() =>
//             setCustomDate(prev => prev.subtract(1, 'month'))
//           }
//           onPressArrowRight={() => setCustomDate(prev => prev.add(1, 'month'))}
//           initialDate={formatDateString(customDate)}
//           allowSelectionOutOfRange
//           current={formatDateString(customDate)}
//           markedDates={{[selected]: {selected: true, disableTouchEvent: true}}}
//           onDayPress={({dateString}) => {
//             setSelected(dateString);
//           }}
//         />
//       </View>
//       <Modal visible={isModalVisible} transparent animationType="slide">
//         <View style={customStyles.modalContainer}>
//           <View style={customStyles.modalContent}>
//             <View style={customStyles.modalHeader}>
//               <Text style={customStyles.modalHeaderText}>Select Year</Text>
//               <TouchableNativeFeedback onPress={() => setIsModalVisible(false)}>
//                 <View style={customStyles.modalCloseButton}>
//                   <Text style={customStyles.modalCloseButtonText}>Close</Text>
//                 </View>
//               </TouchableNativeFeedback>
//             </View>
//             <ScrollView contentContainerStyle={customStyles.yearList}>
//               {years.map(year => (
//                 <TouchableOpacity
//                   key={year}
//                   onPress={() => handleYearSelect(year)}>
//                   <View style={customStyles.yearItem}>
//                     <Text style={customStyles.yearText}>{year}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const customStyles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: 'white',
//     borderRadius: 10,
//     overflow: 'hidden',
//     marginTop: SizeConfig.height * 50,
//     marginBottom: SizeConfig.height * 5,
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   modalHeaderText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   modalCloseButton: {
//     padding: 5,
//   },
//   modalCloseButtonText: {
//     fontSize: 16,
//     color: 'blue',
//   },
//   yearList: {
//     padding: 15,
//   },
//   yearItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   yearText: {
//     fontSize: 16,
//   },
// });

// export default VehicleComponent;
