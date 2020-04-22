import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "A test Recipe",
      "This is simply a test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg",
      [new Ingredient("Meat", 1), new Ingredient("Fries", 20)]
    ),
    new Recipe(
      "Second test Recipe",
      "This is simply second test",
      "https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg",
      [new Ingredient("Bread", 4), new Ingredient("Suace", 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // gives us the reference to the original array, but we dont want to pass that to outside
    // return this.recipes;

    // gives us a new copy of the array
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addToShoppingList(ingredients);
  }
}
