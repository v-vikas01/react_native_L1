import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Modal,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {SizeConfig} from '../../../../size';

interface DatePickerTextFieldProps {
  value: string;
  onChange: (value: string) => void;
  textStyle?: object;
  containerStyle?: object;
  icons?: any;
}

const DatePickerTextField: React.FC<DatePickerTextFieldProps> = ({
  value,
  onChange,
  textStyle,
  containerStyle,
  icons,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleDateConfirm = (selectedDate: Date) => {
    onChange(selectedDate.getFullYear().toString());
    setIsModalVisible(false);
  };

  return (
    <>
      <Pressable onPress={() => setIsModalVisible(true)}>
        <View style={[styles.container, containerStyle]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: SizeConfig.width * 2,
              marginBottom: SizeConfig.height,
            }}>
            <Text style={[styles.title, textStyle]}>Year of Registration</Text>
            {icons && <Image source={icons} style={styles.icon} />}
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Year"
              value={value}
              editable={false}
              style={styles.input}
            />
          </View>
        </View>
      </Pressable>
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <DatePicker date={date} mode="date" onDateChange={setDate} />
            <Pressable onPress={() => handleDateConfirm(date)}>
              <Text style={styles.confirmButton}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SizeConfig.height * 2,
  },
  title: {
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    fontSize: SizeConfig.width * 3.8,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: SizeConfig.width * 0.3,
    borderColor: '#E3DDDD',
    borderRadius: SizeConfig.width * 3,
    paddingHorizontal: SizeConfig.width * 3,
    paddingVertical: SizeConfig.height * 1,
    backgroundColor: '#F2F2F2',
  },
  input: {
    flex: 1,
    paddingVertical: SizeConfig.height * 0.8,
    fontSize: SizeConfig.width * 3.5,
    color: '#000',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
  },
  icon: {
    width: SizeConfig.width * 4,
    height: SizeConfig.width * 4,
    objectFit: 'contain',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: SizeConfig.width * 5,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 20,
  },
  confirmButton: {
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    fontSize: SizeConfig.width * 4.2,
    color: '#23006F',

    marginTop: SizeConfig.height * 2,
  },
});

export default DatePickerTextField;
