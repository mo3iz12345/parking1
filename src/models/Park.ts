import { v4 as uuidv4 } from 'uuid';  
import validator from 'validator';

export class Park{
    id:string='';
    spot_id:number;
    startedAt:Date;
    endedAt:Date;
    price:number;
    paid:boolean;

    constructor (
        spot_id:number,
        startedAt:Date,
        endedAt:Date,
        price:number,
        paid:boolean,
        id?:string,
    ){
        if (id){
            if (validator.isUUID(id, 4)) {
                this.id = id;
            } else {
                this.id = uuidv4();
            }
        }
        this.spot_id=spot_id;
        this.startedAt=startedAt;
        this.endedAt=endedAt;
        this.paid=paid;
        this.price=price;

    }
}