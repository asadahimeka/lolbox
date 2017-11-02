import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
    trigger('routeAnimation', [
        state('*',
            style({
                opacity: 1,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-50%)'
            }),
            animate('0.25s ease-in')
        ]),
        transition(':leave', [
            animate('0.25s ease-out', style({
                opacity: 0,
                transform: 'translateX(-50%)'
            }))
        ])
    ]);
// export const flyInOutAnimation: AnimationEntryMetadata =
//     trigger('flyInOut', [
//         state('in', style({ opacity: 1, transform: 'translateX(0)' })),
//         transition('void => *', [
//             style({
//                 opacity: 0,
//                 transform: 'translateX(-50%)'
//             }),
//             animate('0.2s ease-in')
//         ]),
//         transition('* => void', [
//             animate('0.2s 0.3s ease-out', style({
//                 opacity: 0,
//                 transform: 'scale(0.5)'
//             }))
//         ])
//     ]);