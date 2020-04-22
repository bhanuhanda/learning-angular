import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipes.model";
import { RecipesService } from "../recipes.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"],
})
export class RecipeDetailComponent implements OnInit {
  recipeDetails: Recipe;
  id: number;
  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipeDetails = this.recipeService.getRecipe(this.id);
    });
  }
  addIngredientToShoppingList() {
    this.recipeService.addToShoppingList(this.recipeDetails.ingredients);
  }

  navigateaway() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }
}
