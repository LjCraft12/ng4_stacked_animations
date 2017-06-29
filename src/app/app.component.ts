import { Component } from '@angular/core';

// Import animation specific items we want in the project
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

//  Animations are always defined in the component decorator
  animations: [
    // Trigger the animations for the list array
    trigger('listAnimation', [
      // Go from any to any state
      transition('* => *', [
        // Define enter meaning on enter. then the style of the query. This style will be passed to the items in the items array
        // inside the app.component.html interpolation.
        query(':enter', style({opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))
        ]),{optional: true}),

        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75px)', offset: 1})
          ]))
        ]),{optional: true}),

      ])
    ]),

    // Trigger the animations for the paragraphs
    trigger('explainerAnim', [
      transition('* => *', [

        query( '.col', style({ opacity: 0, transform: 'translateX(-40px' })),

        query('.col', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)'}))
        ]))

      ])
    ])
  ]
})
export class AppComponent {
  // Items array export so we can use it elsewhere in the project
  items = [];

  // Constructor for the items array
  constructor() {
    this.items = [
      'Hello there I am the first item in the array',
      'Hi. I am the second item in the array',
      'Well I am the last but the best item in this array'
    ]
  }

  // Methods of adding and removing items in the array.
  pushItem() {
    this.items.push('Well I am a new item in this array so make room')
  }
  removeItem() {
    this.items.pop();
  }
}
