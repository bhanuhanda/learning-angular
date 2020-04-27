import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  //   @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild("f", { static: true }) shoppingListForm: NgForm;
  editingSubscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.editingSubscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    // const newIngredient = new Ingredient(name, amount);
    // this.ingredientAdded.emit(newIngredient);
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        newIngredient
      );
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }
  ngOnDestroy() {
    this.editingSubscription.unsubscribe();
  }
}
