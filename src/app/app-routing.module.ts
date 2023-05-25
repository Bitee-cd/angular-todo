import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CartComponent } from "./pages/cart/cart.component";
import { TodoComponent } from "./pages/todo/todo.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "todo",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  { path: "cart", component: CartComponent },
  { path: "todo", component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
