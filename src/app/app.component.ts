import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-test';

  helloworld(){
    console.log("hey from hello world.");
    return 'Hello World!';
  }
}
