import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipes.model";
import { RecipesService } from "../recipes.service";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetails: Recipe;
  constructor(private recipeService: RecipesService) {}

  ngOnInit() {}
  addIngredientToShoppingList() {
    this.recipeService.addToShoppingList(this.recipeDetails.ingredients);
  }
}
