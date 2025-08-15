import { getServices } from '@/context/reducer';
import { OutputType } from '@/context/type';
import { getCookie } from '@/utils/whitCockies';
import axios from 'axios';


const sendForm = async (data: OutputType) => {
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

    const url = 'https://mstrcrm.prtestcompany.org/master-crm/client-tgbot/event';

    const response = await axios.post(url, data, {
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

export default sendForm;
