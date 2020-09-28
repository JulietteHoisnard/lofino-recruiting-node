import { Pet } from "../domain/Pet";
import { addRating } from "../repository/petsRepository";

function petLength(pet: Pet, date: Date): number {
  const petLength = pet.ratings.filter( rating => 
    (new Date(rating.date) >= soustractDays(date, 7)) && (new Date(rating.date) <= date)
  ).length
  return petLength;
}

function soustractDays(date: Date, days: number) {
  var result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}

/**
 * finds the "trending" pet from a list of pets.
 * A pet is considered trending if it has the most number of ratings compared to other pets in a time frame of 7 days relative to a given date.
 * NOTE: it's not about the sum of the ratings but the count,
 *       i.e. if pet A has an avg. rating of 3.4 with 5 ratings and B has an avg. rating of 4.5 with 3 ratings then A is still trending
 *
 * @param pets the list of pets
 * @param date the end date of the interval for which to consider the 'trending' state. the start date should be 7 days prior to that date.
 *
 * @returns the pet with the most ratings within the [date - 7 days, date] interval or `undefined` if there is unsufficient data within the interval
 */
export function getTrendingPet(pets: Pet[], date: Date): Pet | undefined {
  const trendingPet: Pet | undefined = pets.sort((peta, petb) => (petLength(petb, date) - petLength(peta, date)))[0];
  if (petLength(trendingPet, date) === 0) {
    return undefined;
  } else {
    return trendingPet;
  }
}
