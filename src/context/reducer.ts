import { StatusReq } from '@/types';
import { initState } from './type';
import { transformServices } from '@/utils/transformServices';
import { setCookie } from '@/utils/whitCockies';
import axios from 'axios';

const URL =
  'https://mstrcrm.prtestcompany.org/master-crm/client-tgbot/validate-init-data?query_id=AAEsPF8FAAAAACw8XwVWBIDC&user=%7B%22id%22%3A90127404%2C%22first_name%22%3A%22Pete%22%2C%22last_name%22%3A%22Roman%22%2C%22username%22%3A%22peteroman%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FLPERE6DUMuvBhGV8nyEhYSH9H-6E88DTeTs2TThkFng.svg%22%7D&auth_date=1754834802&signature=qmWhnfTX8n70cuo3dNX2SApLwi9HYH2u6HR1Ljh8sjl00jELJKqz_npNZO_OfKUCuqqFISqkappNtisMTD0VBg&hash=d5ea2086d70dd28df2d5700069b4eed4a05cf0f66f6c6b249283668e986ba191';

export const getServices = async () => {
  try {
    const response = await axios.get(URL);
          setCookie('token', response?.data.token, 14);

    return response;
  } catch (error: any) {
    console.error('Помилка запиту:', error.message);
  }
};

class Thunk {
  async doGetServices(dispatch: (partialState: Partial<initState>) => void) {
    dispatch({ status: StatusReq.pending });

    const response = await getServices();

    const _services = transformServices(response?.data.data.services);



      dispatch({
        titles: {
          title: response?.data.data.title,
          subtitle: response?.data.title2 || 'title 2',
        },
        user_id: response?.data.user_id || '',
        services: _services,
        status: StatusReq.resolved,
      });
   
  }
}

export default new Thunk();
