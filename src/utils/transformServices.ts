import { OriginalServiceType, ServiceType } from '@/context/type';

export function transformServices(services: OriginalServiceType[]): ServiceType[] {
  const grouped = services.reduce(
    (acc, service) => {
      if (!acc[service.category]) {
        acc[service.category] = {
          id: service.category,
          img: service.photo,
          job: [],
        };
      }

      acc[service.category].job.push({
        id: service.name,
        title: service.name,
        time: service.duration,
        price: service.price,
      });

      return acc;
    },
    {} as Record<string, ServiceType>
  );

  return Object.values(grouped);
}
