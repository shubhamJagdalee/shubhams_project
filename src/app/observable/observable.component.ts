import { Component } from '@angular/core';
import { Observable, filter, from, map, merge, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {

// obervables are asynchronus or parallel flow of execution which can handle multiple evenys at a time
// observable responce => 1....2....3....4...5. 
  public array:any = [1,2,3,4,5,6];
  public obs1:any;
  public obs2:any;
  public obs3:any
  public obs4:any;
  public obs5:any;


  //1.from

  constructor(){
  //1.from
  // array convert into observable
    this.obs1 = from (this.array)
    this.obs1.subscribe((res:any)=>{
      console.log(res)}),
    ((err:any)=>{
      console.log(err)
    })

    //2.of
    //convert comma seperated values into observable
    this.obs2 = of (7,8,'abc',true,null);
    this.obs2.subscribe((res:any)=>{
      console.log(res)})

    // 3.pipe
    // combine multiple operater at a time
    // operation on observable
    this.obs1.pipe(
      map((x:any)=> x+2),    // modify indivisual data into  observable
      filter((y:any)=> y < 6)  // filter indivisual element of observable data based on provided condition.
    ) .subscribe((res:any)=>{
      console.log(res);
    })



      //Observable.create
      // create an observable so that we can consume  the data at UI
    
    this.obs3 = Observable.create((observer:any)=>{
      observer.next([1,2,3]);   // set the data in observable
      // observer.error(given error );  ////detect error and set into the observable
      observer.next([4,5,6]);
      // observer.complete();  // // stop processing
      observer.next([7,8,9])
      observer.next([10,11,12]);

    })
    this.obs3.subscribe((res:any)=>{
      console.log(res)});

    this.obs4 = Observable.create((observer:any)=>{
      observer.next([13,14,15])
    })

    //merge
  
    this.obs5 = merge(this.obs3,this.obs4)
    this.obs5.subscribe((res:any)=>{
      console.log(res)})
}
}
