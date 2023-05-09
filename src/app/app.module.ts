import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { CustomDirectiveDirective } from './directives/custom/custom-directive.directive';
import { FormPipe } from './pipes/custom pipe/form.pipe';
import { ServiseComponent } from './servise/servise.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CrudServiceComponent } from './crud-service/crud-service.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiceComponent } from './promice/promice.component';
import { ParentComponent } from './intercomponent commun/parent/parent.component';
import { Parent2Component } from './intercomponent commun/parent2/parent2.component';
import { ChildComponent } from './intercomponent commun/parent/child/child.component';
import { RoutingComponent } from './routing/routing.component';
import { Comp1Component } from './intercomponent commun/comp1/comp1.component';
import { Comp2Component } from './intercomponent commun/comp2/comp2.component';
import { ThirdPartyComponent } from './third-party/third-party.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    TemplateComponent,
    ReactiveComponent,
    PipesComponent,
    
    CustomPipePipe,
         CustomDirectiveDirective,
         FormPipe,
         ServiseComponent,
         CrudServiceComponent,
         ObservableComponent,
         PromiceComponent,
         ParentComponent,
         Parent2Component,
         ChildComponent,
         RoutingComponent,
         Comp1Component,
         Comp2Component,
         ThirdPartyComponent,
         HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
