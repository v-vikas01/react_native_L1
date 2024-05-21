import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import BackButton from '../../reuse_component/reuse_component';
import Button from '../component/button';
import * as Animatable from 'react-native-animatable';
import ThankYouModuleComponent from '../buy_used/thank_you_module';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {styles} from '../styles';
import VehicleComponent, {VehicleDetails} from './component/vehicale_details';
import PersonalDetailsComponent, {
  PersonalDetails,
} from './component/personal_details';
import ConfromationComponent, {
  ConfromSlotDetails,
} from './component/confromation';

const StepTwo = () => (
  <View style={styles.stepContent}>
    <Text>Step 2: Personal Details</Text>
  </View>
);

const StepThree = () => (
  <View style={styles.stepContent}>
    <Text>Step 3: Confirmation</Text>
  </View>
);

const SellUsedCars: React.FC = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [vehicleDetails, setVehicleDetails] = useState<VehicleDetails | null>(
    null,
  );
  const [personalDetails, setPersonalDetails] =
    useState<PersonalDetails | null>(null);
  const [slotDetails, setSlotDetails] = useState<ConfromSlotDetails | null>(
    null,
  );

  // const handleNext = () => {
  //   if (currentStep === 1 && vehicleDetails != null) {
  //     setCurrentStep(2);
  //   } else if (currentStep === 2 && personalDetails != null) {
  //     setCurrentStep(3);
  //   }
  // };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleVehicleDetails = (details: VehicleDetails) => {
    setVehicleDetails(details);
    setCurrentStep(2);
  };

  const handlePersonalDetails = (details: PersonalDetails) => {
    setPersonalDetails(details);
    setCurrentStep(3);
  };

  const handleSlotlDetails = (details: ConfromSlotDetails) => {
    setSlotDetails(details);
    setIsModalVisible(true);
    setCurrentStep(4);
  };

  const handleCloseModal = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    );
    setIsModalVisible(false);
  };

  const renderStepCircle = (step: number) => {
    if (currentStep > 3 || step < currentStep) {
      return (
        <Image
          style={styles.stepperImg}
          source={require('../../../../assets/buy_sell/checkbox-circle.png')}
        />
      );
    } else if (step === currentStep) {
      return (
        <View style={styles.stepeActiveCicle}>
          <View style={styles.stepeInActiveCicle} />
        </View>
      );
    } else {
      return <View style={styles.stepeInActiveCicle} />;
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar animated backgroundColor="#f5f5f5" barStyle="dark-content" />
      <SafeAreaView style={styles.SellCarConatiner}>
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled>
          <View style={styles.appbar}>
            <BackButton />
            <Text style={[styles.headerText, {textAlign: 'center', flex: 1}]}>
              SELL USED CAR
            </Text>
          </View>
          <View style={styles.stepperContainer}>
            {renderStepCircle(1)}
            <View style={styles.line} />
            {renderStepCircle(2)}
            <View style={styles.line} />
            {renderStepCircle(3)}
          </View>

          <Animatable.View
            animation="fadeIn"
            duration={500}
            style={styles.contentContainer}>
            {currentStep === 1 && (
              <VehicleComponent
                onVehicleDetails={handleVehicleDetails}
                vehicleDetails={vehicleDetails}
              />
            )}
            {currentStep === 2 && (
              <PersonalDetailsComponent
                onPersonalDetails={handlePersonalDetails}
                personalDetails={personalDetails}
                handleBack={handleBack}
              />
            )}

            {currentStep === 3 && (
              <ConfromationComponent
                onSlotDetails={handleSlotlDetails}
                slotDetails={slotDetails}
                handleBack={handleBack}
              />
            )}
          </Animatable.View>
        </ScrollView>
      </SafeAreaView>
      <ThankYouModuleComponent
        isVisible={isModalVisible}
        onClose={handleCloseModal}
      />
    </View>
  );
};

export default SellUsedCars;
