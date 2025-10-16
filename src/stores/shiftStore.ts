import {makeAutoObservable, runInAction} from 'mobx';
import {Shift, getShiftsByLocation} from '../services/apiService';
import {getCurrentLocation, requestLocationPermission} from '../services/locationService';

class ShiftStore {
  shifts: Shift[] = [];
  selectedShift: Shift | null = null;
  isLoading = false;
  error: string | null = null;
  location: {latitude: number; longitude: number} | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async initializeApp() {
    try {
      runInAction(() => {
        this.isLoading = true;
        this.error = null;
      });

      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        throw new Error('Location permission denied');
      }

      const location = await getCurrentLocation();
      runInAction(() => {
        this.location = location;
      });

      await this.fetchShifts(location.latitude, location.longitude);
    } catch (error) {
      runInAction(() => {
        this.error = error instanceof Error ? error.message : 'Unknown error occurred';
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async fetchShifts(latitude: number, longitude: number) {
    try {
      runInAction(() => {
        this.isLoading = true;
      });

      const shifts = await getShiftsByLocation(latitude, longitude);
      
      runInAction(() => {
        this.shifts = shifts;
        this.error = null;
      });
    } catch (error) {
      runInAction(() => {
        this.error = 'Failed to fetch shifts';
        this.shifts = [];
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  selectShift(shift: Shift) {
    this.selectedShift = shift;
  }

  clearSelectedShift() {
    this.selectedShift = null;
  }
}

export default new ShiftStore();