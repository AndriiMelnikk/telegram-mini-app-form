import { StatusReq } from '@/types';
import { initState} from './type';

export const mock = [
  {
    id: 'user_12345',
    img: 'https://randomuser.me/api/portraits/men/75.jpg',
    job: [
      { id: 'job_001', title: 'Frontend Developer', time: '55 хв', price: 3500 },
      { id: 'job_002', title: 'Backend Developer', time: '40 хв', price: 4000 },
    ],
  },
  {
    id: 'user_98765',
    img: 'https://randomuser.me/api/portraits/women/32.jpg',
    job: [
      { id: 'job_003', title: 'UI/UX Designer', time: '40 хв', price: 2700 },
      { id: 'job_004', title: 'Project Manager', time: '40 хв', price: 5000 },
    ],
  },
  {
    id: 'user_54321',
    img: 'https://randomuser.me/api/portraits/men/82.jpg',
    job: [{ id: 'job_005', title: 'QA Engineer', time: '40 хв', price: 3000 }],
  },
];


class Thunk {


async doGetServices(dispatch: (partialState: Partial<initState>) => void) {
  const _services = mock;

        dispatch({ status: StatusReq.pending });

  console.log('Fetched services:', _services);

  setTimeout(()=>{
  dispatch({
    services: _services,
    status: StatusReq.resolved,
  });
  }, 2000)

}


}

export default new Thunk();