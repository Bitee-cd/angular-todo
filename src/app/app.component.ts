import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: ` <p>The main App</p>
    <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = "store";
}
