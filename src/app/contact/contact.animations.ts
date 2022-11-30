import { animate, state, style, transition, trigger} from "@angular/animations";

export let fadeIn = trigger('fadeIn', [

    transition(':enter',[
      style({ opacity:0, transform: 'translateY(100%)'}),
      animate('500ms ease-out')
    ])
  ])