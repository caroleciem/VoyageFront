import {Role}  from './role';
import {Group} from './group';
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
  groupList :Group[];
}
