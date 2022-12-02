import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";

export let stagerIn =  trigger('stagerIn', [
    transition(':enter', [
      query('.container', [
        style({opacity: 0, transform: 'translateY(-10px)'}),
        stagger(500, [
          animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'none' }))
        ])
      ])
    ])
])