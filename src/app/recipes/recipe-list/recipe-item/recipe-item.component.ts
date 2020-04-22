import { Component, OnInit, Input, Output } from "@angular/core";
import { Recipe } from "../../recipes.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;
  //   @Output() recipeDetail = new EventEmitter<void>();
  constructor() {}

  //   sendRecipe(recipe: Recipe) {
  //     // this.recipeDetail.emit();
  //     this.recipeService.recipeSelected.emit(recipe);
  //   }
}
