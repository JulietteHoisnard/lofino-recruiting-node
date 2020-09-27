import { Pets, Ratings } from "../infrastructure/db";
import { Pet } from "../domain/Pet";
import { sampleData } from "../service/sampleData";
import { PetModel } from "../infrastructure/model/Pet";
import { RatingModel } from "../infrastructure/model/Rating";
import { Rating } from "../domain/Rating";

/**
 * adds a rating to a pet with id `petId`. Pass attributes `value` and `date` to the `rating` parameter.
 */
export async function addRating(
	petId: number,
	rating: Omit<Rating, "id" | "petId">
): Promise<RatingModel> {
	return await Ratings.create({
		petId,
		value: rating.value,
		date: rating.date,
  });
}

/**
 * loads all pets from the database
 */
export async function loadPets(): Promise<Pet[]> {
	const petsModel = await Pets.findAll({
		include: [Ratings],
	});
	return petsModel.map(convertToDomainObject);
}

/**
 * loads a single pet from the database
 */
export async function loadPet(id: number): Promise<Pet> {
	const petsModel = await Pets.findByPk(id, {
		include: [Ratings],
	});
	if (petsModel === null) {
		throw Error("not found");
	}
	return convertToDomainObject(petsModel);
}

/**
 * converts the sequelize model obtained from a query to a plain JS object
 */
function convertToDomainObject(model: PetModel): Pet {
	const pet = model.get() as Pet;
	const ratingModels = (model.get() as any).ratings as RatingModel[];
	return { ...pet, ratings: ratingModels.map((r) => r.get() as any) };
}

/**
 * populates the database with the sample data
 */
export async function addSampleData() {
	await Promise.all(
		sampleData.map(async (pet) => {
			await Pets.create(pet);

			const ratings = pet.ratings.map((rating: Omit<Rating, "id">, index) => ({
				id: pet.id * 100 + index + 1,
				...rating,
			}));
			await Ratings.bulkCreate(ratings);
		})
	);
}
