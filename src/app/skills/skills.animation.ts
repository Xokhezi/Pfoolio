import { animate, state, style, transition, trigger } from "@angular/animations";

export let fadeInOne = trigger('fadeInOne', [

    transition(':enter', [
        style({ opacity: 0}),
        animate('2000ms ease-out')
    ]),

])

export let fadeInTwo = trigger('fadeInTwo', [

    transition(':enter', [
        style({ opacity: 0}),
        animate('2500ms 1000ms ease-out')
    ]),

])

export let fadeInThree = trigger('fadeInThree', [

    transition(':enter', [
        style({ opacity: 0}),
        animate('2500ms 2000ms ease-out')
    ]),

])

export let fadeInFour = trigger('fadeInFour', [

    transition(':enter', [
        style({ opacity: 0}),
        animate('2500ms 3000ms ease-out')
    ]),

])

export let fadeInFive = trigger('fadeInFive', [

    transition(':enter', [
        style({ opacity: 0}),
        animate('2500ms 4000ms ease-out')
    ]),

])

