import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"],
})
export class ShoppingEditComponent implements OnInit {
  //   @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}
  onAdd(name: string, amount: number) {
    const newIngredient = new Ingredient(name, amount);
    // this.ingredientAdded.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
