import { Component, OnInit } from "@angular/core";
import { AuthService } from "./Auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  //   title = "recipe-shopping";
  //   loadedFeature: string = "recipe";
  //   display: boolean = false;

  constructor(private authService: AuthService) {
    //     setInterval(() => {
    //       this.display = !this.display;
    //     }, 500);
    //   }
    //   onNavigate(feature: string) {
    //     this.loadedFeature = feature;
  }

  ngOnInit() {
    this.authService.autoLogin();
  }
}
