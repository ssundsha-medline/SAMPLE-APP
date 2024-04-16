export interface HeaderProps {
  status: string;
  data: data[];
  message: string;
}

export interface data {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}
