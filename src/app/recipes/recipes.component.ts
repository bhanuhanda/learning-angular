import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipes.model";
import { RecipesService } from "./recipes.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"],
  providers: [RecipesService],
})
export class RecipesComponent implements OnInit {
  recipeDetails: Recipe;
  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.recipeDetails = recipe;
    });
  }
}
