import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { CategoriesPage } from '../pages/categories/categories';
import { FaqPage } from '../pages/faq/faq';
import { LoginPage } from '../pages/login/login';
import { AccTypePage } from '../pages/acc-type/acc-type';
import { FIREBASE_CONFIG } from './app.firebase.config';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Categories', component: CategoriesPage },
      { title: 'FAQ', component: FaqPage },
      { title: 'Login', component: LoginPage },
      { title: 'Sign up', component: AccTypePage}
    ];

  }

  initializeApp() {
      //establish connection with firebase
      firebase.initializeApp(FIREBASE_CONFIG);
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          user.uid;
        }
      })

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
