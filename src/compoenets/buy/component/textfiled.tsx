import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ImageSourcePropType,
  KeyboardTypeOptions,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {SizeConfig} from '../../../size';

interface TextFieldProps {
  title?: string;
  logo?: ImageSourcePropType;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
  validation?: (text: string) => boolean;
  textStyle?: TextStyle;
  conatinerStyle?: ViewStyle;
  icons?: ImageSourcePropType;
  value?: string;
  editable?: boolean;
  maxLength?: number;
}

const TextField: React.FC<TextFieldProps> = ({
  value,
  title,
  logo,
  placeholder,
  keyboardType,
  onChangeText,
  validation,
  textStyle,
  conatinerStyle,
  icons,
  editable,
  maxLength,
}) => {
  const [error, setError] = useState<string | undefined>(undefined);

  const handleTextChange = (text: string) => {
    onChangeText(text);
    if (validation) {
      const isValid = validation(text);
      setError(isValid ? undefined : `Invalid ${title}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={textStyle}>{title}</Text>
        {icons && <Image source={icons} style={styles.logo} />}
      </View>

      <View style={conatinerStyle}>
        {logo && <Image source={logo} style={styles.logo} />}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#A9A9A9"
          keyboardType={keyboardType}
          onChangeText={handleTextChange}
          value={value}
          editable={editable}
          maxLength={maxLength}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SizeConfig.height * 2,
  },
  title: {
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: SizeConfig.width * 4.2,
    paddingTop: SizeConfig.height * 1,
    color: '#000',
    marginBottom: SizeConfig.height,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: SizeConfig.width * 0.3,
    borderColor: '#E3DDDD',
    borderRadius: SizeConfig.width * 3,
    paddingHorizontal: SizeConfig.width * 3,
    paddingVertical: SizeConfig.height * 1,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: SizeConfig.width * 4,
    height: SizeConfig.width * 4,
    marginRight: SizeConfig.width * 3,
  },
  input: {
    flex: 1,
    paddingVertical: SizeConfig.height * 0.8,
    fontSize: SizeConfig.width * 3.5,
    color: '#000',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
  },
  error: {
    color: 'red',
    fontSize: SizeConfig.width * 3.2,
    marginTop: SizeConfig.height * 0.5,
  },
});

export default TextField;
