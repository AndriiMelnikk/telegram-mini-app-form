import { StatusReq } from "@/types";

interface ServiceType {
  id: string;
  img: string;
  job: {
    id: string;
    title: string;
    time: string;
    price: number;
  }[];
}

export type initState = {
  status: StatusReq;
  services: ServiceType[];
  error: string | null;
};

export type ServerContextSetType = string[];


export type DoGetServices = (dispatch: (partialState: Partial<initState>) => void) => void;