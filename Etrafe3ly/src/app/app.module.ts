import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoriesPage } from '../pages/categories/categories';
import { FaqPage } from '../pages/faq/faq';
import { LoginPage } from '../pages/login/login';
import { AccTypePage} from '../pages/acc-type/acc-type';
import { ForgotPassPage } from '../pages/forgot-pass/forgot-pass';
import { AngularFireModule } from 'angularfire2'; // for db
import { AngularFireDatabaseModule} from 'angularfire2/database'; // for db
import { AngularFireAuthModule } from 'angularfire2/auth';
//import { AnswerSeqQuestionPage } from '../pages/answer-seq-question/answer-seq-question';
//i made it lazy load

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONFIG } from './app.firebase.config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriesPage,
    FaqPage,
    LoginPage,
    ForgotPassPage,
    AccTypePage
    //AnswerSeqQuestionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //for database
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoriesPage,
    FaqPage,
    LoginPage,
    ForgotPassPage,
    AccTypePage
    //AnswerSeqQuestionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
