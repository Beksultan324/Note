export class User {
  constructor(public name: string, public email: string, public phone: string) {}
}

export interface IUser {
  name: string;
  email: string;
  phone: string;
}

export interface ICreateUser {
  name: string;
  email: string;
  phone: string;
}

export interface IEditUser {
  name: string;
  email: string;
  phone: string;
  id: string;
}
