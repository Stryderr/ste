
import { Address } from './address';

export interface Contact {
  id: number;
  name: string;
  title: string;
  description: string;
  mother: Contact | null;
  father: Contact | null;
  children: Contact[];
  siblings: Contact[];
  address: Address;
  phoneNumber: string;
  email: string;
}