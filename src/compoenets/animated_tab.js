import * as React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  useColorScheme,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';

// Create a Stack Navigator for Details
const DetailsStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Details screen component
function DetailsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details Screen!</Text>
    </View>
  );
}

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <DetailsStack.Navigator>
      <DetailsStack.Screen
        name="Home"
        component={HomeContent}
        options={{headerShown: false}}
      />
      <DetailsStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </DetailsStack.Navigator>
  );
}

// Home screen content, including navigation to Details
function HomeContent({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
}

// Settings screen component
function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

// Wishlist screen component
function WishlistScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Wishlist!</Text>
    </View>
  );
}

// Tab bar configuration
const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    icon: require('./assets/home-fill.png'),
    icon1: require('./assets/home-line.png'),
    component: HomeScreen,
  },
  {
    route: 'Settings',
    label: 'Settings',
    icon: require('./assets/user-fill.png'),
    icon1: require('./assets/user-line.png'),
    component: SettingsScreen,
  },
  {
    route: 'Wishlist',
    label: 'Wishlist',
    icon: require('./assets/heart-fill.png'),
    icon1: require('./assets/heart-line.png'),
    component: WishlistScreen,
  },
];

// Tab button component
const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = React.useRef(null);
  const circleRef = React.useRef(null);
  const textRef = React.useRef(null);

  React.useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 0});
    }
  }, [focused]);

  return (
    <Pressable
      onPress={() => {
        onPress(item.route);
      }}
      activeOpacity={1}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
      }}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: 70,
        }}>
        <Pressable style={styles.btn} onPress={() => onPress(item.route)}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Image
            source={focused ? item.icon : item.icon1}
            style={{width: 24, height: 24}}
          />
        </Pressable>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </Pressable>
  );
};

// Main component for rendering tab navigator
function MyTabs() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: 'absolute',
            margin: 16,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
          },
        })}>
        {TabArr.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => (
                <TabButton
                  {...props}
                  item={item}
                  onPress={console.log('ssafsafsafs')}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </SafeAreaView>
  );
}

// Main app component
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'blue',
    borderRadius: 25,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
  },
});

// Animation configurations
const animate1 = {
  0: {scale: 0.5, translateY: 7},
  0.92: {translateY: -34},
  1: {scale: 1.2, translateY: -24},
};
const animate2 = {
  0: {scale: 1.2, translateY: -24},
  1: {scale: 1, translateY: 7},
};
const circle1 = {
  0: {scale: 0},
  0.3: {scale: 0.9},
  0.5: {scale: 0.2},
  0.8: {scale: 0.7},
  1: {scale: 1},
};
const circle2 = {0: {scale: 1}, 1: {scale: 0}};
