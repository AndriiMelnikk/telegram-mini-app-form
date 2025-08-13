import { StatusReq } from '@/types';

export type OriginalServiceType = {
  name: string;
  category: string;
  description: string;
  photo: string;
  duration: number;
  price: number;
};

export type ServiceType = {
  id: string;
  img: string;
  category: string;
  job: JobType[];
};

export type JobType = {
  id: string;
  title: string;
  time: number;
  price: number;
};

export type initState = {
  status: StatusReq;
  titles: {
    title: string;
    subtitle: string;
  };
  services: ServiceType[];
  error: string | null;
};

export type ServerContextSetType = string[];

export type DoGetServices = (dispatch: (partialState: Partial<initState>) => void) => void;
