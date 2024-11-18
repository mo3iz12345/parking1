

export function generateRandomNumberId(): number {
    const min = 100000;  // Le plus petit nombre à 6 chiffres
    const max = 999999;  // Le plus grand nombre à 6 chiffres
    return Math.floor(Math.random() * (max - min + 1)) + min;  }
  