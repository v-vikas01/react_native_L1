/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import App from './App';
import AppScreen from './src/compoenets/app';

AppRegistry.registerComponent(appName, () => AppScreen);

// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

// const darkTheme = {
//   ...DefaultTheme,
//   roundness: 2,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#1A1A1A',
//     accent: '#FAFAFA',
//   },
// };

// const lightTheme = {
//   ...DefaultTheme,
//   roundness: 2,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#FAFAFA',
//     accent: '#1A1A1A',
//   },
// };

// export default function Main() {
//   const scheme = useColorScheme();
//   return (
//     <PaperProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
//       <App />
//     </PaperProvider>
//   );
// }
