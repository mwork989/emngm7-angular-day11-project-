Angular life cycle events 
-----------------------------
1. ngOnInit

When it's called: After Angular first displays the data-bound properties and sets the directive/component's input properties.

Common Use: Initialize the directive/component.

e.g. 
@Component({/*...*/})
export class MyComponent implements OnInit {
  ngOnInit() {
    // Perform initialization or assignement of values to variables, fetch data, etc.
  }
}


2.ngOnChanges

When it's called: When Angular sets or resets data-bound input properties.

Common Use: Respond to changes in one or more data-bound input properties.


@Component({/*...*/})
export class MyComponent implements OnChanges {
  @Input() myInput: string;

  ngOnChanges(changes: SimpleChanges) {
    // Respond to changes in input properties
  }
}

3. ngDoCheck

When it's called: Called during every change detection run, immediately after ngOnChanges and ngOnInit.

Common Use: Custom change detection.

@Component({/*...*/})
export class MyComponent implements DoCheck {
  ngDoCheck() {
    // Check for and react to changes that Angular can't or won't detect on its own
  }
}


import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-custom-check',
  template: `<h2>Current count: {{ count }}</h2>`
})
export class CustomCheckComponent implements DoCheck {
  @Input() count: number;
  private oldCount: number;

  constructor() {
    this.oldCount = 0;
  }

  ngDoCheck(): void {
    if (this.count !== this.oldCount) {
      console.log(`Count changed from ${this.oldCount} to ${this.count}`);
      this.oldCount = this.count;
    }
  }
}

4.ngAfterContentInit

When it's called: After Angular projects external content into the component's view.
Common Use: Respond after Angular projects external content.

@Component({/*...*/})
export class MyComponent implements AfterContentInit {
  ngAfterContentInit() {
    // Component content has been initialized
  }
}


import { Component, ContentChild, AfterContentInit } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      <h1>Parent Component</h1>
      <ng-content></ng-content>
    </div>
  `
})
export class ParentComponent implements AfterContentInit {
  @ContentChild(ChildComponent) childComponent: ChildComponent;

  ngAfterContentInit() {
    console.log('Content children are initialized');
    if (this.childComponent) {
      this.childComponent.performAction();
    }
  }
}



5.ngAfterContentChecked

When it's called: After every check of the component's content.
Common Use: Respond after Angular checks the content projected into the component.
typescript

@Component({/*...*/})
export class MyComponent implements AfterContentChecked {
  ngAfterContentChecked() {
    // Component content has been Checked
  }
}

6.ngAfterViewInit

When it's called: After Angular initializes the component's views and child views.
Common Use: Respond after Angular initializes the component's views and child views.

@Component({/*...*/})
export class MyComponent implements AfterViewInit {
  @ViewChild('someRef') someRef: ElementRef;

  ngAfterViewInit() {
    // View and child views have been initialized
  }
}
import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `<div #myDiv>Example Content</div>`
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('myDiv') myDiv: ElementRef;

  ngAfterViewInit() {
    console.log('View Initialized');
    // Now you can access the view
    this.myDiv.nativeElement.style.backgroundColor = 'yellow';
  }
}


7. ngAfterViewChecked

When it's called: After every check of the component's views and child views.
Common Use: Respond after Angular checks the component's views and child views.

@Component({/*...*/})
export class MyComponent implements AfterViewChecked {
  ngAfterViewChecked() {
    // Component's views and child views have been checked
  }
}

8. ngOnDestroy

When it's called: Just before Angular destroys the directive/component.
Common Use: Cleanup just before Angular destroys the directive/component.

@Component({/*...*/})
export class MyComponent implements OnDestroy {
  ngOnDestroy() {
    // Perform cleanup, unsubscribe observables, detach event handlers
  }
}

reference for additional information on angular life cycle events
----------------------

https://stackblitz.com/angular/gqrnmlbnjde?file=src%2Fapp%2Fapp.component.ts

