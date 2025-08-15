import { OutputType, ServiceType } from '@/context/type';

function transformServices(
  jobIds: string[],
  services: ServiceType[],
  formData: { name: string; phone: string; comment: string; remind: number }
): OutputType {
  const matchedServices = services.flatMap((service) =>
    service.job
      .filter((job) => jobIds.includes(job.id))
      .map((job) => ({
        name: job.title,
        category: service.category,
        description: job.description,
        photo: job.photo,
        duration: job.time,
        price: job.price,
      }))
  );

  return {
    services: matchedServices,
    ...formData,
  };
}
export default transformServices;
