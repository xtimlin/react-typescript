export interface Person {
  id: string; // Unique identifier
  firstName: string; // require
  lastName: string; // require
  email: string; // require
  phone: string; // require
  address?: string; // optional
  city?: string; // optional
  state?: string; // optional
  zipcode?: string; // optional
}
