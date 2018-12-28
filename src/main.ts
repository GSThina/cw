import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
const config = {
  // apiKey: "AIzaSyAnSLQgOPgUnkoPzLkH3jcpl5KHCn-JTWc",
  // authDomain: "learngst.firebaseapp.com",
  // databaseURL: "https://learngst.firebaseio.com",
  // projectId: "project-4997191140645787992",
  // storageBucket: "project-4997191140645787992.appspot.com",
  // messagingSenderId: "259177875690"

};
// firebase.initializeApp(config);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
