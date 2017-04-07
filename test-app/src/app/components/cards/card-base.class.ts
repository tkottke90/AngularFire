import { Type } from '@angular/core';

export class CardBase {

    protected type:string = "";
    protected key:string = "";

    constructor(public component: Type<any>, public data: any, public cardType: string, public cardKey: string) {
        this.key = cardKey;
        this.type = cardType;
    }

}