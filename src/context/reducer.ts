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

const data = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5MDEyNzQwNCIsImV4cCI6MTc1NzY4MTU2N30.Ap_GTEAdRzkcBatxEW4_NcNDcvVUBB6T5_ewTClMdQ0',
  data: {
    title: 'Master CRM',
    title2: 'Master CRM - Address',
    services: mock,
  },
};

class Thunk {
  async doGetServices(dispatch: (partialState: Partial<initState>) => void) {
    dispatch({ status: StatusReq.pending });

    const _services = transformServices(mock);

    setTimeout(() => {
      dispatch({
        titles: {
          title: data.data.title,
          subtitle: data.data.title2,
        },
        services: _services,
        status: StatusReq.resolved,
      });
    }, 2000);
  }
}

export default new Thunk();
