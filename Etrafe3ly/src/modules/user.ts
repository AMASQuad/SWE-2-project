import firebase from 'firebase'
import { DateTime } from "ionic-angular";
export class user {

        //attributes
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


        rateLawyer(rateNumber:number,lawyerid,email,pw){ //to rate lawyer
                
        firebase.auth().signInWithEmailAndPassword(email,pw).then(()=>{
                firebase.database().ref('Rating').push({
                        rate:rateNumber,
                        emailOfUser:email,
                        lid: lawyerid
                })
        }).catch(err=>{
                console.log(err)
        })
                
        }
}