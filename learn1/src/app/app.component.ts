import { AfterContentInit, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// AfterContentInit
export class AppComponent implements DoCheck {
  title = 'learn1';

  dataFromParent = '';

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit was invoked');
  // }


  ngDoCheck(): void {
    console.log('ngDoCheck was invoked');
  }


  sendDataToChild(): void {
    let random = Math.floor(Math.random() * 10);
    this.dataFromParent = "Random Number: " + random;
  }

}
