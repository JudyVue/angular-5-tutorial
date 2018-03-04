import { Component } from '@angular/core';

//component decoroate contains class and the view
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Judy's angular app`;
}
