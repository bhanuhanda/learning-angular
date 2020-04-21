import { Component, OnInit, Input, Output } from "@angular/core";
import { Recipe } from "../../recipes.model";
import { RecipesService } from "../../recipes.service";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  //   @Output() recipeDetail = new EventEmitter<void>();
  constructor(private recipeService: RecipesService) {}

  sendRecipe(recipe: Recipe) {
    // this.recipeDetail.emit();
    this.recipeService.recipeSelected.emit(recipe);
  }
}
