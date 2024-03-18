import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements DoCheck {

  ngDoCheck(): void {
    console.log('ngDoCheck is invoked');
  }
}
