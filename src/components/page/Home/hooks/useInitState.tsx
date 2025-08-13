import { useEffect } from 'react';
import { doGetServices, useDataDispatch, useDataState } from '@/context/DataContext';

function useInitState() {
  const { services, status, titles } = useDataState();
  const dispatch = useDataDispatch();

  useEffect(() => {
    if (!services || services.length === 0) {
      doGetServices(dispatch);
    } else {
      console.log('useInitState: Services already loaded');
    }
  }, [dispatch]);

  return { services, status, titles };
}

export default useInitState;
