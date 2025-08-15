import { StatusReq } from '@/types';
import { initState } from './type';
import { transformServices } from '@/utils/transformServices';
import { setCookie } from '@/utils/whitCockies';
import axios from 'axios';
import createGetUrl from '@/utils/createGetUrl';

const url = createGetUrl()
export const getServices = async () => {
  try {
    alert(url);
    const response = await axios.get(url);
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
