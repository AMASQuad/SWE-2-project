import { DateTime } from "ionic-angular";
import { person } from '../modules/person.interface';
export class user implements person {

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
}