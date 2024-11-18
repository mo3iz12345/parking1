import { City } from "../models/City";
import { Parking } from "../models/Parking";
import type { GPS } from "../types/GPS";

function createCity(name: string, country: string, location: GPS): City {
    return new City(name, [], country, location);
  }

function createParking(
    name: string,
    cityId: number,
    location: GPS,
    numberOfSpots: number,
    hourlyRate: number
  ): Parking {
    return new Parking(name, cityId, location, numberOfSpots, true, hourlyRate);
  }

function setupParkingsAndCities() {
    // Liste des villes avec leurs informations
    const cities = [
      {
        name: 'Aix-en-Provence',
        country: 'France',
        location: { latitude: 43.533329, longitude: 5.43333 } as GPS,
        parkings: [
          { name: 'Aix Parking', spots: 100, rate: 4.5 },
        ],
      },
      {
        name: 'La Spezia',
        country: 'Italy',
        location: { latitude: 44.238366, longitude: 9.6912326 } as GPS,
        parkings: [
          { name: 'Spezia Parking 1', spots: 50, rate: 3 },
          { name: 'Spezia Parking 2', spots: 80, rate: 2.5 },
        ],
      },
      {
        name: 'Aix-la-Chapelle',
        country: 'Germany',
        location: { latitude: 50.776351, longitude: 6.083862 } as GPS,
        parkings: [
          { name: 'Chapelle Parking', spots: 40, rate: 2.8 },
        ],
      },
      {
        name: 'San Cristóbal de La Laguna',
        country: 'Spain',
        location: { latitude: 28.487180709838867, longitude: -16.313879013061523 } as GPS,
        parkings: [
          { name: 'Laguna Parking', spots: 70, rate: 3.1 },
        ],
      },
      {
        name: 'Newcastle upon Tyne',
        country: 'England',
        location: { latitude: 54.9738474, longitude: -1.6131572 } as GPS,
        parkings: [
          { name: 'Newcastle Parking 1', spots: 60, rate: 2.4 },
          { name: 'Newcastle Parking 2', spots: 90, rate: 3.2 },
        ],
      },
    ];
  
    const allCities: City[] = [];
    const allParkings: Parking[] = [];
  
    // Création des villes et parkings
    for (const cityData of cities) {
      const city = createCity(cityData.name, cityData.country, cityData.location);
      allCities.push(city);
  
      for (const parkingData of cityData.parkings) {
        const parking = createParking(
          parkingData.name,
          city.id,
          cityData.location,
          parkingData.spots,
          parkingData.rate
        );
        allParkings.push(parking);
        city.parkingsIds.push(parking.id); 
      }
    }
  
    return { cities: allCities, parkings: allParkings };
  }
  
  // Lancer la configuration
  export const { cities, parkings } = setupParkingsAndCities();
  
