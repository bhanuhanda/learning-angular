import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BasicHighlilghtDirective } from "./practice/basicHighlight.directive";
import { BetterHighlightDirective } from "./practice/better-highlight.directive";
import { StructuralDirectiveDirective } from "./practice/structural-directive.directive";
import { AppRoutingModule } from "./app-routing.module";
// import { RecipesModule } from "./recipes/recipes.module";
// import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core.module";
// import { AuthModule } from "./Auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicHighlilghtDirective,
    BetterHighlightDirective,
    StructuralDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // RecipesModule,
    // ShoppingListModule,
    SharedModule,
    CoreModule,
    // AuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
