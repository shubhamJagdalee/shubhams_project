import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServiseComponent } from './servise/servise.component';
import { CrudServiceComponent } from './crud-service/crud-service.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiceComponent } from './promice/promice.component';
import { RoutingComponent } from './routing/routing.component';
import { Comp1Component } from './intercomponent commun/comp1/comp1.component';
import { Comp2Component } from './intercomponent commun/comp2/comp2.component';
import { ParentComponent } from './intercomponent commun/parent/parent.component';
import { ThirdPartyComponent } from './third-party/third-party.component';

const routes: Routes = [
  {path:"binding" , component:DataBindingComponent},
  {path:"directive", component:DirectivesComponent},
  {path:"template" , component:TemplateComponent},
  {path:"reactive", component:ReactiveComponent},
  {path:"pipe" , component:PipesComponent},
  {path:"cycle" , component:DataBindingComponent},
  {path:"service", component:ServiseComponent},
  {path:"servicecrude", component:CrudServiceComponent},
  {path:"observable" , component:ObservableComponent},
  {path:"promice", component:PromiceComponent},
  {path:"routing/:name/:id" , component:RoutingComponent},
  

  // component communication
{path:"parent" , component:ParentComponent},
{path:"cmp1", component:Comp1Component},


{path:"3pl", component:ThirdPartyComponent}


  // {path:"**" , component:CrudServiceComponent} //go to default component if path is wrong
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
