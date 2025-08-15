type SendFormData = {
  name: string;
  phone: string;
  comment: string;
  remind: string;
  user_id: string;
  start: string;
  end: string;
  services: Service[];
};

type Service = {
  name: string;
  category: string;
  description: string;
  photo: string;
  duration: number;
  price: number;
};
