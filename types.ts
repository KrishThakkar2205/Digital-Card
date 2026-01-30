
export interface Founder {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
}

export interface CompanyInfo {
  mission: string;
  description: string;
  values: {
    title: string;
    text: string;
  }[];
}
