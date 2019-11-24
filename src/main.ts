import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Amplify Configuration
import Amplify, {API} from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
// End Amplify Configuration

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
