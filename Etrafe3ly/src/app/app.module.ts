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
//import { AnswerSeqQuestionPage } from '../pages/answer-seq-question/answer-seq-question';
//i made it lazy load
import { Camera } from '@ionic-native/camera';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserDataProvider } from '../providers/user-data/user-data';
import { CameraProvider } from '../providers/camera/camera';
import { DatabaseProvider } from '../providers/database/database';
import { StarsRatingProvider } from '../providers/stars-rating/stars-rating';
import { StarRatingComponent } from '../components/star-rating/star-rating' //first step to define component

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
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider,
    CameraProvider,
    DatabaseProvider,
    StarsRatingProvider
    
  ]
})
export class AppModule {}
