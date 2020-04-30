import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../Auth/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: [
    `
      li > a {
        cursor: pointer;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  //   @Output() featureSelected = new EventEmitter<string>();
  private userSubscription: Subscription;
  isAuthenticated = false;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe((user) => {
      //   this.isAuthenticated = !user ? false : true;
      this.isAuthenticated = !!user;
    });
  }

  //   onSelect(feature: string) {
  //     this.featureSelected.emit(feature);
  //   }
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
