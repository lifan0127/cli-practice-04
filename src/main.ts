import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { CliPractice04AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(CliPractice04AppComponent);

