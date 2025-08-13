import { JobType, ServiceType } from '@/context/type';

export function useGetAllJobs(arr: ServiceType[]) {
  const initValue: JobType[] = [];

  arr.reduce((acc, value, index) => {
    acc.push(...value.job);
    return acc;
  }, initValue);

  return initValue;
}
