export interface Professional {
  _id: string;
  name: string;
  email: string;
  phone_number: string;
  image?: string;
  working_hours: WorkingHour[];
  role: 'admin' | 'professional';
  linked_agenda: string[];
  rewards_received: string[];
}

export interface WorkingHour {
  day: string;
  start: string;
  end: string;
}