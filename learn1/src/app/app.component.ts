import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = 'learn1';

  dataFromParent = '';

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit was invoked');
  }


  sendDataToChild(): void {
    let random = Math.floor(Math.random() * 10);
    this.dataFromParent = "Random Number: " + random;
  }

}
