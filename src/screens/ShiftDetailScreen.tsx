import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import shiftStore from '../stores/shiftStore'

const ShiftDetailScreen: React.FC = observer(() => {
  const shift = shiftStore.selectedShift;

  if (!shift) {
    return (
      <View style={styles.container}>
        <Text>No shift selected</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Image source={{uri: shift.logo}} style={styles.logo} />
        <View style={styles.titleContainer}>
          <Text style={styles.companyName}>{shift.companyName}</Text>
          <Text style={styles.workType}>{shift.workTypes}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {shift.customerRating}/5</Text>
          <Text style={styles.feedbackCount}>
            {shift.customerFeedbacksCount} reviews
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.address}>{shift.address}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Schedule</Text>
        <View style={styles.scheduleRow}>
          <View style={styles.scheduleItem}>
            <Text style={styles.scheduleLabel}>Date</Text>
            <Text style={styles.scheduleValue}>{shift.dateStartByCity}</Text>
          </View>
          <View style={styles.scheduleItem}>
            <Text style={styles.scheduleLabel}>Start</Text>
            <Text style={styles.scheduleValue}>{shift.timeStartByCity}</Text>
          </View>
          <View style={styles.scheduleItem}>
            <Text style={styles.scheduleLabel}>End</Text>
            <Text style={styles.scheduleValue}>{shift.timeEndByCity}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Workers</Text>
        <View style={styles.workersContainer}>
          <View style={styles.workerInfo}>
            <Text style={styles.workerLabel}>Required</Text>
            <Text style={styles.workerValue}>{shift.planWorkers}</Text>
          </View>
          <View style={styles.workerInfo}>
            <Text style={styles.workerLabel}>Already Signed Up</Text>
            <Text style={styles.workerValue}>{shift.currentWorkers}</Text>
          </View>
          <View style={styles.workerInfo}>
            <Text style={styles.workerLabel}>Remaining</Text>
            <Text style={styles.workerValue}>
              {Math.max(0, shift.planWorkers - shift.currentWorkers)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment</Text>
        <Text style={styles.price}>₽{shift.priceWorker}</Text>
        <Text style={styles.priceNote}>per shift</Text>
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 16,
  },
  titleContainer: {
    flex: 1,
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  workType: {
    fontSize: 16,
    color: '#666',
  },
  ratingContainer: {
    alignItems: 'flex-end',
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  feedbackCount: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  address: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  scheduleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scheduleItem: {
    alignItems: 'center',
  },
  scheduleLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  scheduleValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  workersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  workerInfo: {
    alignItems: 'center',
  },
  workerLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  workerValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  priceNote: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default ShiftDetailScreen;