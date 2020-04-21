import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipes.model";
import { RecipesService } from "../recipes.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"],
})
export class RecipeListComponent implements OnInit {
  //   @Output() recipeToPass = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  //   recipeSelected(recipe: Recipe) {
  //     // this.recipeToPass.emit(recipe);
  //     this.recipeService.recipeSelected.emit(recipe);
  //   }
}
