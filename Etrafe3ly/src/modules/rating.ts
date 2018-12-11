import { user } from "./user";

export interface Rating{
    key:any;
    value:number;
    userUID:string;
    lawyerUID:string;
    comment:string;
}