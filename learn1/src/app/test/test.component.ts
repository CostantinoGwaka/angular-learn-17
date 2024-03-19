import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

// DoCheck
export class TestComponent implements AfterContentInit, AfterContentChecked, AfterViewInit, OnInit {

  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef

  ngDoCheck(): void {
    console.log('ngDoCheck is invoked');
  }

  ngOnInit(): void {
    //hook will initialize the component when it gets fully rendered & that does 
    //not imply on view getting fully rendered so this might not give the appropriate result
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is invoked');
    console.log('ngAfterContentInit is wrapper', this.wrapper);
    console.log('ngAfterContentInit is content', this.content);

  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked was invoked');
  }

  ngAfterViewInit(): void {
    //used perform task on after view initialization
    const divElement: HTMLElement = this.wrapper.nativeElement;
    divElement.style.color = 'blue';
    divElement.style.fontSize = '15px';
    divElement.style.fontWeight = '300';

    console.log('ngAfterViewInit was invoked', this.wrapper);
  }
}
