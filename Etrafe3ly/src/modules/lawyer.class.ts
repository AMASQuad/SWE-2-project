import { person } from "./person.interface";
import { DateTime } from 'ionic-angular';
export class lawyer implements person{

    //attributes
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
    degreeOfEnrollment:string;
    address:string;
    hourRate:number;
    bio:string;
    //rate
    peopleRated:number;
    overallRate:number;

    //constant to store data
    
}