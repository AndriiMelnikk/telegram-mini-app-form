import { useEffect } from 'react';
import { doGetServices, useDataDispatch, useDataState } from '@/context/DataContext';

function useServices() {
  const { services, status } = useDataState();
  const dispatch = useDataDispatch();

  useEffect(() => {
    doGetServices(dispatch);
  }, [dispatch]);

  return { services, status };
}
export default useServices;
