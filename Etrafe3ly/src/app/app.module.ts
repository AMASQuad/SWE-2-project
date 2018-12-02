import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoriesPage } from '../pages/categories/categories';
import { FaqPage } from '../pages/faq/faq';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ForgotPassPage } from '../pages/forgot-pass/forgot-pass';
import { AngularFireModule } from 'angularfire2'; // for db
import { AngularFireDatabaseModule} from 'angularfire2/database'; // for db
//import { AnswerSeqQuestionPage } from '../pages/answer-seq-question/answer-seq-question';
//i made it lazy load

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriesPage,
    FaqPage,
    LoginPage,
    SignUpPage,
    ForgotPassPage
    //AnswerSeqQuestionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //for database
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCvWuxvtDa8zi6Ku09J25QlE_HlXyPvcgU",
      authDomain: "etrafe3ly.firebaseapp.com",
      databaseURL: "https://etrafe3ly.firebaseio.com",
      projectId: "etrafe3ly",
      storageBucket: "etrafe3ly.appspot.com",
      messagingSenderId: "639620565058"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoriesPage,
    FaqPage,
    LoginPage,
    SignUpPage,
    ForgotPassPage
    //AnswerSeqQuestionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
