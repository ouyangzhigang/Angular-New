import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import {jokesModuels} from './app.routes';

@NgModule({
  declarations: [
    JokesComponent
  ],
  imports: [
    RouterModule.forChild(jokesModules)
  ],
  providers: [],
  bootstrap: []
})
export class JokesModule { }
