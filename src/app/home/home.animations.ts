
import { animate, state, style, transition, trigger } from "@angular/animations";

export let fadeMain = trigger('fadeMain', [

    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-60px)' }),
        animate('500ms ease-out')
    ]),

])

export let fadeSecond = trigger('fadeSecond', [

    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(60px)' }),
        animate('500ms   ease-out')
    ]),

    transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0, transform: 'translateY(-100px)' }))
    ])

])
export let appear = trigger('appear', [

    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(150px)' }),
        animate('500ms 500ms   ease-out')
    ])

])
export let mainDivUp = trigger('mainDivUp', [

    transition(':leave', [

        animate('500ms ease-out', style({ opacity: 0, transform: 'translateY(-150px)' }))
    ])

])

export let meDivUp = trigger('meDivUp', [

    transition(':enter', [
        style({transform: 'translateY(100%)' }),
        animate('500ms 500ms ease-out')
    ])

])