import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator // Add this import
} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import shiftStore from '../stores/shiftStore';
import ShiftList from '../components/ShiftList';
import {RootStackParamList} from '../../App';

type ShiftListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ShiftList'
>;

const ShiftListScreen: React.FC = observer(() => {
  const navigation = useNavigation<ShiftListScreenNavigationProp>();

  const handleShiftPress = (shift: any) => {
    shiftStore.selectShift(shift);
    navigation.navigate('ShiftDetail');
  };

  const handleRefresh = () => {
    if (shiftStore.location) {
      shiftStore.fetchShifts(
        shiftStore.location.latitude,
        shiftStore.location.longitude
      );
    }
  };

  if (shiftStore.shifts.length === 0 && !shiftStore.isLoading) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.noShiftsText}>No shifts available in your area</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ShiftList
        shifts={shiftStore.shifts}
        onShiftPress={handleShiftPress}
      />
      {shiftStore.isLoading && shiftStore.shifts.length > 0 && (
        <ActivityIndicator style={styles.bottomLoader} />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noShiftsText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  bottomLoader: {
    padding: 16,
  },
});

export default ShiftListScreen;