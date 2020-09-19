class Meal {
	constructor(
		id,
		categoryId,
		title,
		affordability,
		complexity,
		imgUrl,
		duration,
		ingredients,
		steps,
		isGultenFree,
		isVegan,
		isVegetarian,
		isLactoseFree
	) {
		this.id = id;
		this.categoryId = categoryId;
		this.title = title;
		this.affordability = affordability;
		this.complexity = complexity;
		this.imgUrl = imgUrl;
		this.duration = duration;
		this.ingredients = ingredients;
		this.steps = steps;
		this.isGultenFree = isGultenFree;
		this.isVegan = isVegan;
		this.isVegetarian = isVegetarian;
		this.isLactoseFree = isLactoseFree;
	}
}

export default Meal;
