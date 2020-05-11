import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Ingredient } from "src/app/shared/ingredient.model";
// import { ShoppingListService } from "../shopping-list.service";
import { Store } from "@ngrx/store";
import * as ShoppingListActions from "../store/shopping-list.actions";
import * as fromShoppingList from "../store/shopping-list.reducer";

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
  //   editedItemIndex: number;
  editedItem: Ingredient;

  constructor(
    // private shoppingListService: ShoppingListService,
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngOnInit() {
    //   when we subscribe, we get the data of type StateInterface, because that is what we return
    this.editingSubscription = this.store
      .select("shoppingList")
      .subscribe((stateData) => {
        if (stateData.editedIngredientIndex > -1) {
          this.editMode = true;
          this.editedItem = stateData.editedIngredient;
          //   this.editedItemIndex = stateData.editedIngredientIndex;
          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          });
        } else {
          this.editMode = false;
        }
      });
    // this.editingSubscription = this.shoppingListService.startedEditing.subscribe(
    //   (index: number) => {
    //     this.editedItemIndex = index;
    //     this.editMode = true;
    //     this.editedItem = this.shoppingListService.getIngredient(index);
    //     this.shoppingListForm.setValue({
    //       name: this.editedItem.name,
    //       amount: this.editedItem.amount,
    //     });
    //   }
    // );
  }

  onSubmit(form: NgForm) {
    // const newIngredient = new Ingredient(name, amount);
    // this.ingredientAdded.emit(newIngredient);
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      //   this.shoppingListService.updateIngredient(
      //     this.editedItemIndex,
      //     newIngredient
      //   );
      this.store.dispatch(
        new ShoppingListActions.UpdateIngredient(
          //   index: this.editedItemIndex,
          newIngredient
        )
      );
    } else {
      //   this.shoppingListService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }
  onDelete() {
    // this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(
      //   new ShoppingListActions.DeleteIngredient(this.editedItemIndex)
      new ShoppingListActions.DeleteIngredient()
    );
    this.onClear();
  }
  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
  ngOnDestroy() {
    this.editingSubscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
}
