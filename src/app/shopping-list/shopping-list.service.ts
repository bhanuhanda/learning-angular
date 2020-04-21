import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredint: Ingredient) {
    this.ingredients.push(ingredint);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addToShoppingList(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.shoppingListService.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
  }
}
