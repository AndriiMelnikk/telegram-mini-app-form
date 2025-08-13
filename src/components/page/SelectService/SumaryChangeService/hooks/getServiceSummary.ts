import { ServiceType } from '@/context/type';
import { formatMinutes } from '@/utils/formatMinutes';

export function getServiceSummary(services: ServiceType[]) {
  let totalJobs = 0;
  let totalMinutes = 0;
  let totalPrice = 0;

  services.forEach((service) => {
    service.job.forEach((job) => {
      totalJobs += 1;
      totalMinutes += job.time;
      totalPrice += job.price;
    });
  });

  const time = formatMinutes(totalMinutes);

  return {
    totalJobs,
    time,
    totalPrice,
  };
}
