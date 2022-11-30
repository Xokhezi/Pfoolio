
import { animate, state, style, transition, trigger} from "@angular/animations";

export let slideMe = trigger('slideMe', [

    transition(':enter',[
      style({ opacity:0, transform: 'translateX(-100%)'}),
      animate('500ms ease-out')
    ]),
  
    transition(':leave', [
      animate('500ms ease-out', style({ opacity:0,transform: 'translateX(-100%)'}))
    ])
])
export let slideProjects = trigger('slideProjects', [

    transition(':enter',[
      style({ opacity:0, transform: 'translateX(100%)'}),
      animate('500ms 500ms ease-out')
    ]),
  
    transition(':leave', [
      animate('500ms ease-out', style({ opacity:0,transform: 'translateX(100%)'}))
    ])
])
export let arrowFade = trigger('arrowFade', [

    transition(':enter',[
      style({ opacity:0}),
      animate('1500ms 1000ms ease-out')
    ]),
  
    transition(':leave', [
      animate('100ms ease-out', style({ opacity:0}))
    ])
])