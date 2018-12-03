import { DateTime } from 'ionic-angular';
export interface person{
    
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    secQuestion:string;
    secAns:string;
    phone:number;
    nationalID:number;
    gender:string;
    birthDate:DateTime;
    accountType:string;
    
}