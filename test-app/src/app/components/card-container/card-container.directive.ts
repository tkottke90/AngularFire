import { Directive, ViewContainerRef } from '@angular/core';


@Directive({
    selector: '[card-comp]',
})

export class CardDirective {
    
    constructor(public ViewContainerRef: ViewContainerRef) { }

}