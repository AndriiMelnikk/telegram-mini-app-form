import { filterServicesByJobIds } from '@/utils/filterServicesByJobIds';
import useServices from './useServices';
import { getServiceSummary } from '../SumaryChangeService/hooks/getServiceSummary';




export function useSumaryChangeService(selectedServices: string[]) {

  const { services } = useServices();
  const filtered = filterServicesByJobIds(services, selectedServices);
  const totalService = getServiceSummary(filtered);

  return {
    totalService,
    filtered,
    services
  };
}
