import { toSlug } from "../utils/toSlug";
import type { GPS } from "../types/GPS";
import { generateRandomNumberId } from "../utils/generateRandomNumberId";
export class City  {
    id:number;
    name : string;
    slug :string;
    parkingsIds : number[];
    country : string;
    location: GPS;
    constructor(
        name : string,
        parkingsIds : number[],
        country : string,
        location: GPS,
    ){
        this.id = generateRandomNumberId();
        this.name = name;
        this.slug = toSlug(name);  
        this.parkingsIds = parkingsIds;
        this.country = country;
        this.location = location;
    }   
}