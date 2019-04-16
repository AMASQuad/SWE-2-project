import { DateTime } from 'ionic-angular';
import { Rating } from './rating';
export class lawyer{

    //attributes
    key:string;
    id:string;
    uid:string;
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
    img:string;
    //rate
    totalRate:number = 0;
    totalPeopleRated:number = 0;
    avgRate:number = 0;

    //image
    imageURL:string;
}