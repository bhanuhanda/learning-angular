import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipes.model";
import { RecipesService } from "../recipes.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"],
})
export class RecipeListComponent implements OnInit {
  //   @Output() recipeToPass = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(
    private recipeService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  //   recipeSelected(recipe: Recipe) {
  //     // this.recipeToPass.emit(recipe);
  //     this.recipeService.recipeSelected.emit(recipe);
  //   }

  newRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
