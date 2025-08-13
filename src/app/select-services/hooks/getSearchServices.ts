import { ServiceType } from "@/context/type";

export function getSearchServices(arr: ServiceType[], search?: string): ServiceType[] {
    if (!search) return arr;

    const lowerSearch = search.toLowerCase();

    return arr
        .map(service => {
            const filteredJobs = service.job.filter(job =>
                job.title.toLowerCase().includes(lowerSearch)
            );

            if (filteredJobs.length === 0) return null; // якщо немає збігів, відкидаємо сервіс

            return {
                ...service,
                job: filteredJobs
            };
        })
        .filter(Boolean) as ServiceType[]; // прибираємо null
}
