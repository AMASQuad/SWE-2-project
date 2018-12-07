import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Button } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { CategoriesPage } from '../pages/categories/categories';
import { FaqPage } from '../pages/faq/faq';
import { LoginPage } from '../pages/login/login';
import { AccTypePage } from '../pages/acc-type/acc-type';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { UserDataProvider } from '../providers/user-data/user-data';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  // attributes
  userDataObj:UserDataProvider;
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar,
    db:UserDataProvider
    , public splashScreen: SplashScreen) {
    this.initializeApp();
    this.userDataObj =db;
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Categories', component: CategoriesPage },
      { title: 'FAQ', component: FaqPage }
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
    if(page.component){
    this.nav.setRoot(page.component);
  }
  else{
    //here is the code of the logout
    console.log('logout is pressed');
  }
  }
  go2Register(){
    this.nav.push(AccTypePage)
  }
 
  go2Login(){
    this.nav.push(LoginPage)
  }

  Logout(){
    firebase.auth().signOut(); // end session
    this.userDataObj.freeData(); // free data from service
    this.nav.pop()
  }

  go2Profile(){
    if(this.userDataObj.userType == 'Lawyers'){
      this.nav.push('LawyerProfileTabsPage')}
    else{
      this.nav.push('UserProfileTabsPage')
    }
  }
}
