import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from "@expo/vector-icons";
import MapScreen from './components/MapScreen';
import CameraScreen from './components/CameraScreen';
import ListScreen from './components/ListScreen';

const AppNavigator = createBottomTabNavigator({
    Kartta: {screen: MapScreen},
    Kamera: {screen: CameraScreen},
    Lista: {screen: ListScreen}
},{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName === 'Kartta') {
        return <Ionicons name='md-map' size={20} color={tintColor}/>
      }else if (routeName === 'Kamera') {
        return <Ionicons name='md-camera' size={20} color={tintColor}/>
      }else if (routeName === 'Lista') {
        return <Ionicons name='md-list' size={20} color={tintColor}/>
      }
    }
  })
});

const App = createAppContainer(AppNavigator);

/*export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}*/
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
