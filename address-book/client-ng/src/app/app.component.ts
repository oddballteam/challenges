import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
fetch('/api/oddballs').then(resp => resp.json()).then(data => {
  console.log(data);
});
