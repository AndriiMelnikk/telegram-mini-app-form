import { ServiceType } from '@/context/type';

/**
 * Фільтрує масив сервісів, залишаючи тільки jobs, де id співпадає з jobIdsToKeep
 * @param services - масив категорій ServiceType
 * @param jobIdsToKeep - масив id jobs, які треба залишити
 * @returns новий масив ServiceType з відфільтрованими jobs
 */
export function filterServicesByJobIds(
  services: ServiceType[],
  jobIdsToKeep: string[]
): ServiceType[] {
  return services
    .map((service) => ({
      ...service,
      job: service.job.filter((job) => jobIdsToKeep.includes(job.id)),
    }))
    .filter((service) => service.job.length > 0);
}
