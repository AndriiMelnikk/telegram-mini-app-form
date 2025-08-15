import { getServices } from '@/context/reducer';
import { getCookie } from '@/utils/whitCockies';
import axios from 'axios';

const getFreeTime = async (time: string) => {
  try {
    let token = getCookie('token');

    const getLastToken = async () => {
      const response = await getServices();
      return response?.data.token;
    };

    if (!token) {
      const lastToken = await getLastToken();
      if (lastToken) {
        token = lastToken;
      }
    }

    const url = `https://mstrcrm.prtestcompany.org/master-crm/client-tgbot/timeslots?date=${time}`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error('Помилка запиту:', error.message);
    throw error;
  }
};

export default getFreeTime;
