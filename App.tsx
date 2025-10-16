import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';

import shiftStore from './src/stores/shiftStore';
import ShiftListScreen from './src/screens/ShiftListScreen'
import ShiftDetailScreen from './src/screens/ShiftDetailScreen';

export type RootStackParamList = {
  ShiftList: undefined;
  ShiftDetail: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = observer(() => {
  useEffect(() => {
    shiftStore.initializeApp();
  }, []);

  if (shiftStore.isLoading && shiftStore.shifts.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Getting your location...</Text>
      </View>
    );
  }

  if (shiftStore.error && shiftStore.shifts.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{shiftStore.error}</Text>
        <Text style={styles.retryText}>Please restart the app to try again</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ShiftList">
        <Stack.Screen
          name="ShiftList"
          component={ShiftListScreen}
          options={{title: 'Available Shifts'}}
        />
        <Stack.Screen
          name="ShiftDetail"
          component={ShiftDetailScreen}
          options={{title: 'Shift Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 18,
    color: '#e74c3c',
    textAlign: 'center',
    marginBottom: 8,
  },
  retryText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default App;