import { StatusReq } from '@/types';
import { initState, ServiceType, OriginalServiceType } from './type';
import { transformServices } from '@/utils/transformServices';

const mock: OriginalServiceType[] = [
  {
    name: 'Service 1',
    category: 'Молодший барбер',
    description: 'Frontend Developer',
    photo:
      'https://assets.alteg.io/main_service_image/basic/9/99/99a2238ab9bbc6d_20210727170754.png',
    duration: 100,
    price: 100,
  },
  {
    name: 'Service 2',
    category: 'Молодший барбер',
    description: 'Backend Developer',
    photo:
      'https://assets.alteg.io/main_service_image/basic/9/99/99a2238ab9bbc6d_20210727170754.png',
    duration: 100,
    price: 100,
  },
  {
    name: 'Service 3',
    category: 'Барбер',
    description: 'UI/UX Designer',
    photo:
      'https://assets.alteg.io/main_service_image/basic/9/99/99a2238ab9bbc6d_20210727170754.png',
    duration: 100,
    price: 100,
  },
  {
    name: 'Service 4',
    category: 'Додатково',
    description: 'Project Manager',
    photo:
      'https://assets.alteg.io/main_service_image/basic/9/99/99a2238ab9bbc6d_20210727170754.png',
    duration: 100,
    price: 100,
  },
];

class Thunk {
  async doGetServices(dispatch: (partialState: Partial<initState>) => void) {
    dispatch({ status: StatusReq.pending });

    const _services = transformServices(mock);

    setTimeout(() => {
      dispatch({
        services: _services,
        status: StatusReq.resolved,
      });
    }, 2000);
  }
}

export default new Thunk();
