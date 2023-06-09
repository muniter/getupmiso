import 'react-native-gesture-handler';
import { Platform } from 'react-native';
import { lightColors, createTheme, ThemeProvider } from '@rneui/themed';
import { TabNavigator } from './Navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <TabNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
    primary: '#614D9E',
    secondary: '#F2F2F2',
  },
});
