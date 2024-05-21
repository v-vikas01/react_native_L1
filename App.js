// import * as React from 'react';
// import {
//   Button,
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Pressable,
// } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Animated, {
//   FadeInDown,
//   FadeInLeft,
//   FadeInUp,
//   SharedTransition,
//   withSpring,
// } from 'react-native-reanimated';
// import {sharedElementTransition} from './src/compoenets/sharedelement';
// import {Image} from 'react-native-animatable';

// const customTransition = SharedTransition.custom(values => {
//   'worklet';
//   return {
//     height: withSpring(values.targetHeight),
//     width: withSpring(values.targetWidth),
//     originX: withSpring(values.targetOriginX),
//     originY: withSpring(values.targetOriginY),
//   };
// });

// function HomeScreen({navigation}) {
//   // React.useEffect(() => {
//   //   const timerId = setInterval(() => {
//   //     navigation.navigate('Details');
//   //   }, 5000);

//   //   return () => clearInterval(timerId);
//   // }, []);

//   const data = [
//     {id: '1', title: 'Product 1'},
//     {id: '2', title: 'Product 2'},
//     {id: '3', title: 'Product 3'},
//     {id: '4', title: 'Product 4'},
//     {id: '5', title: 'Product 5'},
//     {id: '6', title: 'Product 6'},
//     {id: '7', title: 'Product 7'},
//     {id: '8', title: 'Product 8'},
//     {id: '9', title: 'Product 9'},
//   ];

//   const renderItem = ({item}) => (
//     <Animated.View sharedTransitionTag={item.id}>
//       <Pressable
//         style={styles.cardContainer}
//         onPress={() => navigation.navigate('Details', {itemId: item.id})}>
//         <Image source={require('./assets/car.png')} style={styles.image} />
//         <Text style={styles.label}>{item.title}</Text>
//       </Pressable>
//     </Animated.View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         numColumns={3}
//       />
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({navigation, route}) {
//   const [first, setfirst] = React.useState(false);
//   const {itemId} = route.params ?? '';

//   // React.useEffect(() => {
//   //   const timerId = setInterval(() => {
//   //     navigation.navigate('Home');
//   //   }, 5000);

//   //   return () => clearInterval(timerId);
//   // }, [first]);

//   return (
//     <View
//       style={{
//         flex: 1,
//         paddingTop: 50,
//         alignContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//       }}>
//       <Animated.View
//         style={{width: 200, height: 200, backgroundColor: 'transparent'}}
//         sharedTransitionTag={itemId}
//         sharedTransitionStyle={customTransition}

//         // sharedTransitionStyle={sharedElementTransition}
//       >
//         <Image
//           source={require('./assets/car.png')}
//           style={styles.cardContainer2}></Image>
//       </Animated.View>

//       <Animated.View
//         style={{paddingTop: 20}}
//         entering={FadeInUp.duration(400).delay(600)}>
//         <Text style={styles.label}>Product Details{itemId}</Text>

//         <Animated.Text
//           style={styles.descration}
//           entering={FadeInLeft.duration(600).delay(800)}>
//           freestar freestar What is Lorem Ipsum? Lorem Ipsum is simply dummy
//           text of the printing and typesetting industry. Lorem Ipsum has been
//           the industry's standard dummy text ever since the 1500s, when an
//           unknown printer took a galley of type and scrambled it to make a type
//           specimen book. It has survived not only five centuries, but also the
//           leap into electronic typesetting, remaining essentially unchanged. It
//           was popularised in the 1960s with the release of Letraset sheets
//           containing Lorem Ipsum passages, and more recently with desktop
//           publishing software like Aldus PageMaker including versions of Lorem
//           Ipsum.
//         </Animated.Text>
//       </Animated.View>

//       <Button
//         title="Go back"
//         onPress={() => navigation.goBack()}
//         style={{backgroundColor: first ? 'red' : 'green'}}
//       />
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Details"
//           component={DetailsScreen}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// const styles = StyleSheet.create({
//   cardContainer: {
//     borderRadius: 12,
//     // backgroundColor: 'green',
//     paddingHorizontal: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     alignItems: 'center',
//     width: 100,
//     height: 100,
//   },
//   cardContainer2: {
//     borderRadius: 12,
//     // backgroundColor: 'red',

//     paddingHorizontal: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     alignItems: 'center',
//     width: 200,
//     height: 200,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: 'black',
//     textAlign: 'center',
//   },
//   descration: {
//     fontSize: 14,
//     fontWeight: '400',
//     color: 'black',
//     textAlign: 'start',
//     paddingHorizontal: 6,
//     paddingVertical: 4,
//   },

//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: '#fff',
//   },
//   cardContainer: {
//     flex: 1,
//     alignItems: 'center',
//     margin: 5,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 12,
//   },
//   label: {
//     fontSize: 16,
//     marginTop: 8,
//     textAlign: 'center',
//   },
// });

import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import {useTheme, ThemeProvider, DefaultTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import dataImages from './src/compoenets/data';
import AnimatedModal from './src/compoenets/module/top-view-module';

const lightTheme = {
  ...DefaultTheme,
  mode: 'exact',
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200EE',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    text: '#000000',
  },
};

const darkTheme = {
  ...DefaultTheme,
  mode: 'exact',
  colors: {
    ...DefaultTheme.colors,
    primary: '#BB86FC',
    background: '#121212',
    surface: '#121212',
    text: '#FFFFFF',
  },
};

const GalleryItem = ({url, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', {url});
      }}>
      <View style={styles.image}>
        <Image
          resizeMode="cover"
          source={{uri: url, cache: 'FastImage.cacheControl.cacheOnly'}}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
    </TouchableOpacity>
  );
};

const ListImage = ({navigation}) => {
  const theme = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const renderImage = ({item}) => {
    return <GalleryItem url={item} navigation={navigation} />;
  };

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <TouchableOpacity onPress={toggleTheme()} style={styles.toggleButton}>
        <Text style={[styles.toggleButtonText, {color: theme.colors.text}]}>
          {theme.dark ? 'Light Mode' : 'Dark Mode'}
        </Text>
      </TouchableOpacity>
      <ScrollView scrollEnabled="true" horizontal={true}></ScrollView>
      <FlatList
        numColumns={3}
        renderItem={renderImage}
        data={dataImages}
        scrollEnabled={true}
      />
    </View>
  );
};

const DetailImage = ({route}) => {
  const {url} = route.params;
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Image
        resizeMode="cover"
        source={{uri: url}}
        style={styles.detailImage}
      />
      <Text style={[styles.headerText, {color: theme.colors.text}]}>
        Main Header
      </Text>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <AnimatedModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="List"
            component={ListImage}
            // component={() => <ListImage toggleTheme={toggleTheme} />}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Detail" component={DetailImage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButton: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  toggleButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 10,
    margin: 5,
  },
  detailImage: {
    width: 200,
    height: 200,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'LibreBodoni-Bold',
    fontSize: 20,
    marginTop: 10,
  },
});

export default App;
