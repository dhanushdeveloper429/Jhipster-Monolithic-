import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PojectOneSharedModule } from 'app/shared/shared.module';
import { PojectOneCoreModule } from 'app/core/core.module';
import { PojectOneAppRoutingModule } from './app-routing.module';
import { PojectOneHomeModule } from './home/home.module';
import { PojectOneEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PojectOneSharedModule,
    PojectOneCoreModule,
    PojectOneHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PojectOneEntityModule,
    PojectOneAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class PojectOneAppModule {}
