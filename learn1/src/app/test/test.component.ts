import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

// DoCheck
export class TestComponent implements AfterContentInit {

  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef

  // ngDoCheck(): void {
  //   console.log('ngDoCheck is invoked');
  // }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is invoked');
    console.log('ngAfterContentInit is wrapper', this.wrapper);
    console.log('ngAfterContentInit is content', this.content);

  }
}
