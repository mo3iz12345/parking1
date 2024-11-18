import type { GPS } from "../types/GPS";
import { generateRandomNumberId } from "../utils/generateRandomNumberId";
import { Spot } from "./Spot";

export class Parking{
    id : number;
    name : string;
    cityId:number;
    location:GPS;
    numberOfSpots:number;
    opened:boolean;
    hourlyRate:number;
    parkIds:number[];

    constructor(
        name : string,
        cityId:number,
        location:GPS,
        numberOfSpots:number,
        opened:boolean,
        hourlyRate:number,
    ){
        this.id = generateRandomNumberId();
        this.name=name;
        this.cityId=cityId;
        this.location=location;
        this.numberOfSpots=numberOfSpots;
        this.opened=opened;
        this.hourlyRate=hourlyRate;
        this.parkIds = [];
        for (let i=0; i<numberOfSpots; i++){
            const spot = new Spot (i+1);
            this.parkIds.push(spot.id);
        }
    }
}