import axios from 'axios';

const BASE_URL = 'https://mobile.handswork.pro/api';

export interface Shift {
  logo: string;
  address: string;
  companyName: string;
  dateStartByCity: string;
  timeStartByCity: string;
  timeEndByCity: string;
  currentWorkers: number;
  planWorkers: number;
  workTypes: string;
  priceWorker: number;
  customerFeedbacksCount: number;
  customerRating: number;
}

export const getShiftsByLocation = async (
  latitude: number,
  longitude: number
): Promise<Shift[]> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/shifts?lat=${latitude}&lng=${longitude}`
    );
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};