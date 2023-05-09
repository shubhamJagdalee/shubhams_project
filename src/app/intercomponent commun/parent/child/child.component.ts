import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

@Input() data:any


// child to parent -

// child.ts > ChildComponent.html > parent.ts > parent.html > dom



}
