import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "recipe-shopping";
  loadedFeature: string = "recipe";
  display: boolean = false;

  constructor() {
    setInterval(() => {
      this.display = !this.display;
    }, 500);
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
