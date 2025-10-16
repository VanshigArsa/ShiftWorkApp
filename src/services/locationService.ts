import Geolocation from 'react-native-geolocation-service';

export const requestLocationPermission = async (): Promise<boolean> => {
  try {
    const result = await Geolocation.requestAuthorization('whenInUse');
    return result === 'granted';
  } catch (error) {
    console.error('Location permission error:', error);
    return false;
  }
};

export const getCurrentLocation = (): Promise<{latitude: number; longitude: number}> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => reject(error),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
    );
  });
};