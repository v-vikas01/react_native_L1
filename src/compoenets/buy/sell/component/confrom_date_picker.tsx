import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  Text,
  GestureResponderEvent,
} from 'react-native';
import {Calendar, DateData} from 'react-native-calendars';
import {SizeConfig} from '../../../../size';

interface DatePickerProps {
  onDateSelect: (date: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({onDateSelect}) => {
  const [date, setDate] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isTodaySelectable, setIsTodaySelectable] = useState<boolean>(true);

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Check if the current time is past 6 PM
    if (hours > 18 || (hours === 18 && minutes > 0)) {
      setIsTodaySelectable(false);
    }
  }, []);

  const handleDateSelect = (day: DateData): void => {
    setDate(day.dateString);
    onDateSelect(day.dateString);
    setModalVisible(false);
  };

  const handleIconPress = (event: GestureResponderEvent): void => {
    setModalVisible(true);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.textFieldContainer}
        onPress={handleIconPress}>
        <Image
          source={require('../../../../../assets/buy_sell/calendar.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.textField}
          placeholder="Pick Date"
          value={date}
          editable={false}
        />
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <Calendar
              onDayPress={handleDateSelect}
              minDate={today}
              markedDates={{
                [date]: {
                  selected: true,
                  disableTouchEvent: true,
                },
                [today]: {
                  disabled: !isTodaySelectable,
                },
              }}
              current={date}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: SizeConfig.width * 0.24,
    borderColor: '#DBDBDB',
    borderRadius: SizeConfig.width * 3,
    paddingHorizontal: 10,
    paddingVertical: SizeConfig.height * 0.7,
    backgroundColor: '#FFFFFF',
  },
  textField: {
    flex: 1,
    padding: SizeConfig.width * 1.5,
    color: '#000000',
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: SizeConfig.width * 4,
  },
  icon: {
    width: SizeConfig.width * 5,
    height: SizeConfig.width * 5,
    marginLeft: SizeConfig.width * 2.5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  calendarContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  closeButton: {
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    fontSize: SizeConfig.width * 4.2,
    color: '#000000',
  },
});

export default DatePicker;
