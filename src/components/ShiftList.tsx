import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ListRenderItem,
} from 'react-native';
import {Shift} from '../services/apiService';
import {observer} from 'mobx-react-lite';

interface ShiftListProps {
  shifts: Shift[];
  onShiftPress: (shift: Shift) => void;
}

const ShiftList: React.FC<ShiftListProps> = observer(({shifts, onShiftPress}) => {
  const renderShiftItem: ListRenderItem<Shift> = ({item}) => (
    <TouchableOpacity style={styles.shiftCard} onPress={() => onShiftPress(item)}>
      <View style={styles.header}>
        <Image source={{uri: item.logo}} style={styles.logo} />
        <View style={styles.companyInfo}>
          <Text style={styles.companyName}>{item.companyName}</Text>
          <Text style={styles.workType}>{item.workTypes}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {item.customerRating}</Text>
          <Text style={styles.feedbackCount}>({item.customerFeedbacksCount})</Text>
        </View>
      </View>

      <View style={styles.details}>
        <Text style={styles.address}>{item.address}</Text>
        <Text style={styles.dateTime}>
          {item.dateStartByCity} • {item.timeStartByCity} - {item.timeEndByCity}
        </Text>
        
        <View style={styles.footer}>
          <View style={styles.workersInfo}>
            <Text style={styles.workersText}>
              {item.currentWorkers}/{item.planWorkers} workers
            </Text>
          </View>
          <Text style={styles.price}>₽{item.priceWorker}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={shifts}
      renderItem={renderShiftItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
});

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  shiftCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  companyInfo: {
    flex: 1,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  workType: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  ratingContainer: {
    alignItems: 'flex-end',
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  feedbackCount: {
    fontSize: 12,
    color: '#666',
  },
  details: {
    marginLeft: 62, // logo width + margin
  },
  address: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  dateTime: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workersInfo: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  workersText: {
    fontSize: 12,
    color: '#666',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
});

export default ShiftList;