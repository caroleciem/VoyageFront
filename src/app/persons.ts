import {Role}  from './role';
export interface Persons {
  civility:string;
  firstName: string;
  name: string;
  address:string;
  city:string;
  country:string;
  zipCode:number;
  email: string;
  phone:number;
  roleSet : Role [];
}
