import { OriginalServiceType, ServiceType } from '@/context/type';

export function transformServices(services: OriginalServiceType[]): ServiceType[] {
  const grouped = services.reduce(
    (acc, service) => {
      if (!acc[service.category]) {
        acc[service.category] = {
          id: '',
          category: service.category,
          img: service.photo,
          job: [],
        };
      }

      acc[service.category].job.push({
        id: '',
        title: service.name,
        time: service.duration,
        price: service.price,
      });

      return acc;
    },
    {} as Record<string, ServiceType>
  );

  let jobCounter = 0;

  return Object.values(grouped).map((service, catIndex) => {
    const newJobs = service.job.map((job) => ({
      ...job,
      id: `job_${jobCounter++}`,
    }));

    return {
      ...service,
      id: `svc_${catIndex}`,
      job: newJobs,
    };
  });
}
