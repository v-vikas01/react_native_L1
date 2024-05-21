import React, {useState, useEffect} from 'react';
import {View, Text, LayoutAnimation} from 'react-native';
import {styles} from '../../styles';
import {
  BrandSelectionList,
  ModuleSelectionList,
  SelectItemsHeaderComponent,
} from './helper';
import TextField from '../../component/textfiled';
import {brandItems, moduleItem} from './data';
import DatePickerTextField from './date_picker';
import Snackbar from 'react-native-snackbar';
import Button from '../../component/button';
import {SizeConfig} from '../../../../size';

export interface VehicleDetails {
  vehicleNumber: string;
  brand: brandItems | null;
  module: moduleItem | null;
  variant: string;
  year: string;
}

interface Props {
  onVehicleDetails: (details: VehicleDetails) => void;
  vehicleDetails: VehicleDetails | null;
}

const VehicleComponent: React.FC<Props> = ({
  onVehicleDetails,
  vehicleDetails,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedBrand, setSelectedBrand] = useState<brandItems | null>(null);
  const [isModuleExpanded, setModuleIsExpanded] = useState<boolean>(false);
  const [selectedModule, setSelectedModule] = useState<moduleItem | null>(null);
  const [vehicleNumber, setVehicleNumber] = useState<string>('');
  const [variant, setVariant] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [updatedSelectedBrand, setUpdatedSelectedBrand] = useState<
    string | null
  >(null);
  const [updatedSelectedModule, setUpdatedSelectedModule] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (vehicleDetails) {
      setVehicleNumber(vehicleDetails.vehicleNumber);
      setSelectedBrand(vehicleDetails.brand);
      setSelectedModule(vehicleDetails.module);
      setVariant(vehicleDetails.variant);
      setYear(vehicleDetails.year);
    }
  }, [vehicleDetails]);

  const toggleBrandExpansion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(prev => !prev);
    setModuleIsExpanded(false);
  };

  const handleVehicleNumChange = (text: string) => {
    setVehicleNumber(text);
  };

  const handleVariantChange = (text: string) => {
    setVariant(text);
  };

  const handleModulePress = () => {
    if (!selectedBrand) {
      Snackbar.show({
        text: 'Please select a brand',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#FF0000',
        textColor: '#FFFFFF',
        fontFamily: 'Outfit-Medium',
      });
      return;
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(false);

    setModuleIsExpanded(true);
  };

  const handleBrandSelect = (brand: brandItems) => {
    setSelectedBrand(brand);
    setIsExpanded(false);
    setSelectedModule(null);
    setModuleIsExpanded(true);
    setUpdatedSelectedBrand(brand.title);
  };

  const handleModuleSelect = (module: moduleItem) => {
    setSelectedModule(module);
    setModuleIsExpanded(false);
    setUpdatedSelectedModule(module.title);
  };

  useEffect(() => {
    if (vehicleDetails) {
      setVehicleNumber(vehicleDetails.vehicleNumber);
      setSelectedBrand(vehicleDetails.brand);
      setSelectedModule(vehicleDetails.module);
      setVariant(vehicleDetails.variant);
      setYear(vehicleDetails.year);
    }
  }, [vehicleDetails]);

  const sendVehicleDetails = () => {
    if (
      !selectedBrand ||
      !selectedModule ||
      !vehicleNumber ||
      !variant ||
      !year
    ) {
      return Snackbar.show({
        text: 'Please fill all details',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#FF0000',
        textColor: '#FFFFFF',
        fontFamily: 'Outfit-Medium',
      });
    }
    onVehicleDetails({
      vehicleNumber,
      brand: selectedBrand,
      module: selectedModule,
      variant,
      year,
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={styles.stepperHeader}>Vehicle Details</Text>
      <View style={styles.stepperBody}>
        <TextField
          title="Vehicle Reg. Number"
          placeholder="Enter Reg. Number"
          keyboardType="default"
          value={vehicleNumber}
          onChangeText={handleVehicleNumChange}
          validation={text => text.length !== 0}
          textStyle={styles.SellTextFiledtitle}
          conatinerStyle={styles.SellTextFiledContainer}
        />
        <SelectItemsHeaderComponent
          title="Brand"
          subTitle={selectedBrand ? selectedBrand.title : 'Select Brand'}
          onPress={toggleBrandExpansion}
        />
        {isExpanded && (
          <BrandSelectionList
            selectedBrand={selectedBrand}
            onSelect={handleBrandSelect}
          />
        )}
        <SelectItemsHeaderComponent
          title="Module"
          subTitle={selectedModule ? selectedModule.title : 'Select Module'}
          onPress={handleModulePress}
        />
        {isModuleExpanded && (
          <ModuleSelectionList
            selectedModule={selectedModule}
            onSelect={handleModuleSelect}
          />
        )}
        <TextField
          title="Variant"
          placeholder="Enter Variant"
          keyboardType="default"
          value={variant}
          onChangeText={handleVariantChange}
          validation={text => text.length !== 0}
          textStyle={styles.SellTextFiledtitle}
          conatinerStyle={styles.SellTextFiledContainer}
        />

        <DatePickerTextField
          value={year}
          onChange={setYear}
          icons={require('../../../../../assets/buy_sell/calendar.png')}
          textStyle={styles.textFieldTitle}
          containerStyle={styles.textFieldContainer}
        />
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'flex-end',
          marginTop: SizeConfig.height * 3.5,
        }}>
        <Button
          text="Next"
          onPress={sendVehicleDetails}
          textStyle={styles.submitbuttonText}
          style={styles.buttonConatiner}
        />
      </View>
    </View>
  );
};

export default VehicleComponent;
