import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  //if we were linking to separate html file, template becoems templateUrl
  template: `<div>
               <h2>Welcome {{name}}</h2>

              <h2>EVENTS LESSON 9</h2>
              <button (click)="onClick()">Greet</button>
              {{greeting}}


               <h2 class="text-success">TESTING CLASSES LESSON 7</h2>
               <h2 [class]="successClass"></h2>
               <h2 [class.text-danger]="hasError">ERROR TEST</h2>

               <h2 [ngClass]="messageClasses">MESSAGE CLASSES</h2>

               <h2 [style.color]="hasError ? 'red' : 'green'">STYLE BINDING</h2>
               <h2 [style.color]="highlightColor">NEXT STYLE BINDING 2</h2>
               <h2 [ngStyle]="titleStyles">NEXT STYLE BINDING 3</h2>


               <input id="{{myId}}" type="text" value="Judy" />
               <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Judy" />
            </div>`, 
  //things we can't do in html: 
      //bindings, i.e. the {{}}, cannot contain assignments
      //cannot access global vars such as Window, you do this in the class
  //if we were link to css file, styles becomes stylesUrls
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = 'Judy';
  public myId = 'testID';
  public siteUrl = window.location.href;
  public isDisabled = false;
  public successClass = 'text-succes';
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  }

  public highlightColor = 'orange';

  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  }

  public greeting = '';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log(`Welcome to Judy's app`);
    this.greeting = `Welcome to Judy's app`;
  }

  greetUser() {
    return `Hello ${this.name}`;
  }

}

//Attributes and props are not the same, attrs are HTML and properites are from the DOM
//Attrs initialize DOM properties and then they are done. Attr values cannot change once they are initialized
//Prop values, however, can change
