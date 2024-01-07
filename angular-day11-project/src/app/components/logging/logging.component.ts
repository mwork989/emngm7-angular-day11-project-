import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-logging',
  template: `<p>LoggingComponent works!</p>`
})
export class LoggingComponent implements OnInit, OnChanges, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() someInput: string;

  constructor() {
    this.someInput = ''
    console.log('Constructor: The component is being constructed');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Called when input properties change', changes);
  }

  ngOnInit() {
    console.log('ngOnInit: Called once, after the first ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck: Custom change detection');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit: Called after content (ng-content) has been projected into view');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: Called after every check of the component content');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: Called after the component’s view, and child views, are initialized');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked: Called after every check of the component’s view, and child views');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Called just before the component is destroyed');
  }
}
