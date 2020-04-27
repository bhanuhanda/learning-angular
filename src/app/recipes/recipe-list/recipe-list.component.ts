import { Component, OnInit, OnDestroy } from "@angular/core";
import { Recipe } from "../recipes.model";
import { RecipesService } from "../recipes.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  //   @Output() recipeToPass = new EventEmitter<Recipe>();
  recipes: Recipe[];
  recipeSubscription: Subscription;
  constructor(
    private recipeService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipeSubscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  //   recipeSelected(recipe: Recipe) {
  //     // this.recipeToPass.emit(recipe);
  //     this.recipeService.recipeSelected.emit(recipe);
  //   }

  newRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
  }
}
