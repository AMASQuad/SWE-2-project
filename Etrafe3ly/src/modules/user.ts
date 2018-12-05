import firebase from 'firebase'
import { DateTime } from "ionic-angular";
import { EmailComposer } from '@ionic-native/email-composer';
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

        lawyers:any[] = [];
searchForLawyer(textData:string) {
    firebase.database().ref('Lawyers').orderByChild('degreeOfEnrollment').equalTo(cat).on('value',(data)=>{
        const recieved = this.snaptoObject(data);
        this.lawyers.push(recieved)
    })
}


snaptoObject(snap) { // to get data from db and put it into array
  let array = [];
  snap.forEach(element => {
    let item = element.val();
    item.key = element.key;
    array.push(item);
  });
  return array[0];
}

constructor(private emailComposer: EmailComposer) { } // will be moved 



//------------------------------------------email function------------------------------
this.emailComposer.isAvailable().then((available: boolean) =>{
 if(available) {
   console.log('connection established')
 }
});

let email = {
  to: 'max@mustermann.de',//reciever Email
  cc: 'erika@mustermann.de',//
  bcc: ['john@doe.com', 'jane@doe.com'],
  attachments: [
  ],
  subject: 'Reserfation in Etrafe3ly',
  body: `hello sir, an appointment was reserved by ${this.navParams.data.firstName} and his number is ${this.navParams.data.phone},
  please contact him`,
  isHtml: true
};

// Send a text message using default options
this.emailComposer.open(email);
// ---------------------------------



}