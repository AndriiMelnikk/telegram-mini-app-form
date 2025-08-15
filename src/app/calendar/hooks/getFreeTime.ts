import { getCookie } from '@/utils/whitCockies';
import axios from 'axios';

const URL =
  'https://mstrcrm.prtestcompany.org/master-crm/client-tgbot/validate-init-data?query_id=AAEsPF8FAAAAACw8XwVWBIDC&user=%7B%22id%22%3A90127404%2C%22first_name%22%3A%22Pete%22%2C%22last_name%22%3A%22Roman%22%2C%22username%22%3A%22peteroman%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FLPERE6DUMuvBhGV8nyEhYSH9H-6E88DTeTs2TThkFng.svg%22%7D&auth_date=1754834802&signature=qmWhnfTX8n70cuo3dNX2SApLwi9HYH2u6HR1Ljh8sjl00jELJKqz_npNZO_OfKUCuqqFISqkappNtisMTD0VBg&hash=d5ea2086d70dd28df2d5700069b4eed4a05cf0f66f6c6b249283668e986ba191';

const getFreeTime = async (time: string) => {
  try {
    const token = getCookie('token');
    if (!token) {
      return [];
    }

    const url = `https://mstrcrm.prtestcompany.org/master-crm/client-tgbot/timeslots?date=${time}`;

    // const response = await axios.get(url , {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });

    return [
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
    ];
  } catch (error: any) {
    console.error('Помилка запиту:', error.message);
    throw error;
  }
};

export default getFreeTime;
