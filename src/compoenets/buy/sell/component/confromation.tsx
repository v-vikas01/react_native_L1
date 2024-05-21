// ConformationComponent.tsx
import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {selectSlotList} from './data';
import {SizeConfig} from '../../../../size';
import DatePicker from './confrom_date_picker';
import {styles} from '../../styles';
import {CustomCheckBox} from './helper';
import Button from '../../component/button';

export interface ConfromSlotDetails {
  selectedOption: string;
  selectedDate: string;
  selectedSlotTime: string;
  selectedSlot: number;
}

interface Props {
  onSlotDetails: (details: ConfromSlotDetails) => void;
  slotDetails: ConfromSlotDetails | null;
  handleBack: () => void;
}

const ConformationComponent: React.FC<Props> = ({
  onSlotDetails,
  slotDetails,
  handleBack,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [selectedSlotTime, setSelectedSlotTime] = useState<string | null>(null);

  useEffect(() => {
    if (slotDetails) {
      setSelectedOption(slotDetails.selectedOption);
      setSelectedDate(slotDetails.selectedDate);
      setSelectedSlot(slotDetails.selectedSlot);
      setSelectedSlotTime(slotDetails.selectedSlotTime);
    }
  }, [slotDetails]);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleSlotSelect = (slotId: number, slotTime: string) => {
    if (!selectedDate) {
      Snackbar.show({
        text: 'Please select an evaluation date first.',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#FF0000',
        textColor: '#FFFFFF',
      });
      return;
    }
    setSelectedSlot(slotId);
    setSelectedSlotTime(slotTime);
  };

  const sendSlotDetails = () => {
    if (
      !selectedOption ||
      !selectedDate ||
      !selectedSlotTime ||
      !selectedSlot
    ) {
      return Snackbar.show({
        text: 'Please fill all details',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#FF0000',
        textColor: '#FFFFFF',
        fontFamily: 'Outfit-Medium',
      });
    }
    onSlotDetails({
      selectedOption,
      selectedDate,
      selectedSlotTime,
      selectedSlot,
    });
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={styles.stepperHeader}>
        How do you want your car evaluated?
      </Text>
      <View style={styles.confromationDateConatiner}>
        <CustomCheckBox
          label="Doorstep Evaluation"
          value={selectedOption === 'Doorstep Evaluation'}
          onValueChange={() => handleOptionSelect('Doorstep Evaluation')}
        />
        <CustomCheckBox
          label="Showroom Evaluation"
          value={selectedOption === 'Showroom Evaluation'}
          onValueChange={() => handleOptionSelect('Showroom Evaluation')}
        />
        {selectedOption != null && (
          <>
            <View style={styles.pickdateContainer}>
              <Text
                style={[
                  styles.stepperHeader,
                  {marginRight: SizeConfig.width * 4},
                ]}>
                Choose Evaluation Date
              </Text>
              <DatePicker onDateSelect={handleDateSelect} />
            </View>
            <View style={styles.stepperBody}>
              <Text style={styles.stepperHeader}>Select Time Slot</Text>
              <FlatList
                scrollEnabled={false}
                data={selectSlotList}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                renderItem={({item}) => (
                  <Pressable
                    style={[
                      styles.selectSlotCardContainer,
                      {
                        backgroundColor:
                          selectedSlot === item.id ? '#F2F2F2' : '#FFFFFF',
                      },
                    ]}
                    onPress={() => handleSlotSelect(item.id, item.time)}>
                    <Text style={styles.brandTitle}>{item.time}</Text>
                  </Pressable>
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop:
            selectedOption != null
              ? SizeConfig.height * 0
              : SizeConfig.height * 30,
        }}>
        <Button
          text="Go Back"
          onPress={handleBack}
          textStyle={styles.submitbuttonText}
          style={styles.buttonConatiner}
        />
        <View style={{marginHorizontal: SizeConfig.width * 2}} />
        <Button
          text="Next"
          onPress={sendSlotDetails}
          textStyle={styles.submitbuttonText}
          style={styles.buttonConatiner}
        />
      </View>
    </View>
  );
};

export default ConformationComponent;
